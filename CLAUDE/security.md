# Security Guidelines

## Authentication & Authorization

### JWT Tokens
```typescript
// Secure session management with NextAuth.js
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await verifyCredentials(credentials.email, credentials.password);
        return user ? { id: user.id, email: user.email, name: user.name } : null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    }
  }
};
```

### Password Security
```typescript
// Bcrypt hashing with proper salt rounds
import bcrypt from 'bcryptjs';

export class AuthService {
  private readonly SALT_ROUNDS = 12;

  async hashPassword(password: string): Promise<string> {
    // Validate password strength first
    if (!this.isStrongPassword(password)) {
      throw new ValidationError('Password does not meet security requirements');
    }

    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  private isStrongPassword(password: string): boolean {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }
}
```

### Session Validation
```typescript
// Verify user permissions on all protected routes
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Authentication required'
    });
  }

  // Verify session is still valid
  const user = await ctx.db.user.findUnique({
    where: { id: ctx.session.user.id },
    select: { id: true, email: true, emailVerified: true }
  });

  if (!user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Invalid session'
    });
  }

  return next({
    ctx: {
      ...ctx,
      user: user
    }
  });
});
```

### Input Validation
```typescript
// Zod schemas on all API inputs
export const CreateWorldSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(255, 'Title must be less than 255 characters')
    .regex(/^[a-zA-Z0-9\s\-']+$/, 'Title contains invalid characters'),
  
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional(),
    
  genre: z.string()
    .max(100, 'Genre must be less than 100 characters')
    .optional()
});

// API endpoint with validation
export const worldRouter = router({
  create: protectedProcedure
    .input(CreateWorldSchema)
    .mutation(async ({ ctx, input }) => {
      // Input is automatically validated by Zod
      return ctx.db.world.create({
        data: { ...input, userId: ctx.user.id }
      });
    })
});
```

## Data Protection

### SQL Injection Prevention
```typescript
// Prisma ORM prevents direct SQL injection
// GOOD: Using Prisma query builder
const worlds = await prisma.world.findMany({
  where: {
    userId: userId,
    title: { contains: searchTerm, mode: 'insensitive' }
  }
});

// AVOID: Raw SQL (only use with proper parameterization)
const worlds = await prisma.$queryRaw`
  SELECT * FROM worlds 
  WHERE user_id = ${userId} 
  AND title ILIKE ${'%' + searchTerm + '%'}
`;
```

### XSS Prevention
```typescript
// React built-in protection + input sanitization
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(content: string): string {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  });
}

// Component with safe HTML rendering
export function WorldDescription({ description }: { description: string }) {
  const sanitizedHtml = sanitizeHtml(description);
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      className="prose"
    />
  );
}
```

### CSRF Protection
```typescript
// NextAuth.js built-in CSRF tokens
// Automatically handled in NextAuth configuration

// For custom forms, use CSRF tokens
import { getCsrfToken } from 'next-auth/react';

export function CustomForm() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    getCsrfToken().then(setCsrfToken);
  }, []);

  return (
    <form method="post" action="/api/custom-action">
      <input name="csrfToken" type="hidden" value={csrfToken} />
      {/* form fields */}
    </form>
  );
}
```

### Secrets Management
```typescript
// Environment variables configuration
// .env.local (never committed to version control)
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="random-secret-key"
OPENAI_API_KEY="sk-..."

// Access in code
export class ConfigService {
  static get databaseUrl(): string {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error('DATABASE_URL environment variable is required');
    }
    return url;
  }

  static get openaiApiKey(): string {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      throw new Error('OPENAI_API_KEY environment variable is required');
    }
    return key;
  }
}
```

## API Security

### Rate Limiting
```typescript
// Prevent API abuse (implementation needed)
import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to API routes
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    apiLimiter(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
```

### CORS Configuration
```typescript
// Restrict origins appropriately
export const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://worldartificer.com', 'https://app.worldartificer.com']
    : ['http://localhost:3001', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
```

### Error Handling
```typescript
// Don't leak sensitive information in errors
export function createApiError(error: unknown): ApiErrorResponse {
  if (error instanceof ValidationError) {
    return {
      code: 'VALIDATION_ERROR',
      message: error.message,
      field: error.field
    };
  }

  if (error instanceof AuthenticationError) {
    return {
      code: 'UNAUTHORIZED',
      message: 'Authentication required'
    };
  }

  // Don't expose internal errors in production
  if (process.env.NODE_ENV === 'production') {
    console.error('Internal server error:', error);
    return {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred'
    };
  }

  return {
    code: 'INTERNAL_ERROR',
    message: error instanceof Error ? error.message : 'Unknown error'
  };
}
```

### Audit Logging
```typescript
// Track user actions (implementation needed)
export class AuditLogger {
  static async logUserAction(
    userId: string,
    action: string,
    resource: string,
    metadata?: Record<string, unknown>
  ) {
    await prisma.auditLog.create({
      data: {
        userId,
        action,
        resource,
        metadata: metadata ? JSON.stringify(metadata) : null,
        ipAddress: this.getClientIpAddress(),
        userAgent: this.getClientUserAgent(),
        timestamp: new Date()
      }
    });
  }

  private static getClientIpAddress(): string {
    // Implementation depends on deployment setup
    return 'unknown';
  }

  private static getClientUserAgent(): string {
    // Implementation depends on request context
    return 'unknown';
  }
}

// Usage in API endpoints
export const worldRouter = router({
  create: protectedProcedure
    .input(CreateWorldSchema)
    .mutation(async ({ ctx, input }) => {
      const world = await ctx.db.world.create({
        data: { ...input, userId: ctx.user.id }
      });

      await AuditLogger.logUserAction(
        ctx.user.id,
        'CREATE',
        'WORLD',
        { worldId: world.id, title: world.title }
      );

      return world;
    })
});
```

## File Upload Security

### File Validation
```typescript
// Validate file uploads
export function validateImageUpload(file: File): void {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (file.size > maxSize) {
    throw new ValidationError('File size exceeds 5MB limit');
  }

  if (!allowedTypes.includes(file.type)) {
    throw new ValidationError('Invalid file type. Only JPEG, PNG, and WebP allowed');
  }

  // Additional checks for file content vs. extension
  // Implementation would include file header validation
}
```

## Production Security Checklist

- [ ] HTTPS enforced for all traffic
- [ ] Security headers configured (HSTS, CSP, etc.)
- [ ] Database connections encrypted
- [ ] API keys stored securely
- [ ] Rate limiting implemented
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention verified
- [ ] XSS protection implemented
- [ ] CSRF protection enabled
- [ ] File upload validation in place
- [ ] Error messages sanitized
- [ ] Audit logging implemented
- [ ] Regular security updates scheduled