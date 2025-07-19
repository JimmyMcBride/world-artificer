# Troubleshooting Guide

## Database Connection Issues

### Check Database URL Format
```bash
# Correct format
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# Common issues:
# - Missing password or username
# - Wrong port (5432 is default for PostgreSQL)
# - Database name doesn't exist
```

### Regenerate Prisma Client
```bash
# After schema changes, regenerate client
pnpm --filter @world-artificer/database db:generate

# If types are still wrong, try:
pnpm --filter @world-artificer/database db:push
```

### Reset Database (Development Only)
```bash
# WARNING: This will delete all data
pnpm --filter @world-artificer/database db:reset

# Alternative: Reset and seed
pnpm --filter @world-artificer/database db:reset --force
pnpm --filter @world-artificer/database db:seed
```

### Connection Pool Issues
```typescript
// If getting "too many connections" errors
// In packages/database/src/client.ts
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Reduce connection pool size for development
  datasourceUrl: process.env.DATABASE_URL + "?connection_limit=5",
});
```

## Frontend Import Errors

### Clear Next.js Cache
```bash
# Clear Next.js build cache
rm -rf packages/frontend/.next

# Clear Node modules and reinstall
rm -rf node_modules packages/*/node_modules
pnpm install
```

### Workspace Package Linking Issues
```bash
# Check if workspace packages are properly linked
pnpm --filter @world-artificer/frontend build

# If seeing "Module not found" for workspace packages:
pnpm install --frozen-lockfile

# Force workspace dependency resolution
pnpm --filter @world-artificer/frontend install
```

### TypeScript Path Mapping
```json
// In packages/frontend/tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@world-artificer/shared": ["../shared/src"],
      "@world-artificer/database": ["../database/src"]
    }
  }
}
```

## tRPC Type Issues

### Regenerate Types After Schema Changes
```bash
# Build all packages to regenerate types
pnpm build

# If types are still stale:
rm -rf packages/*/dist
pnpm build
```

### Restart TypeScript Server
```bash
# VS Code: Cmd+Shift+P > "TypeScript: Restart TS Server"
# Or kill and restart your editor
```

### tRPC Client Connection Issues
```typescript
// Check tRPC client configuration in packages/frontend/src/lib/api.ts
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: process.env.NODE_ENV === 'production' 
            ? '/api/trpc'
            : 'http://localhost:3002/api/trpc',
          headers() {
            return {
              // Ensure session token is included
              authorization: getAuthHeader(),
            };
          },
        }),
      ],
    };
  },
  ssr: false, // Disable SSR if having hydration issues
});
```

## Port Conflicts

### Check What's Using Ports
```bash
# Check what's using frontend port
lsof -i :3001

# Check what's using backend port  
lsof -i :3002

# Check database port
lsof -i :5432
```

### Kill Processes
```bash
# Kill process by PID
kill -9 <PID>

# Kill all Node processes (nuclear option)
killall node

# Kill specific port users
npx kill-port 3001
npx kill-port 3002
```

### Change Default Ports
```bash
# In package.json scripts, change ports:
"dev": "next dev -p 3003"  # Frontend on 3003
"dev": "tsx watch src/server.ts --port 3004"  # Backend on 3004
```

## Authentication Issues

### NextAuth Configuration
```typescript
// Check environment variables are set
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3001"

// In packages/frontend/src/lib/auth.ts
export const authOptions: NextAuthOptions = {
  // Ensure providers are configured correctly
  providers: [
    CredentialsProvider({
      // Configuration here
    })
  ],
  // Check callbacks are working
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT callback:', { token, user }); // Debug
      return token;
    }
  }
};
```

### Session Not Persisting
```typescript
// Wrap app with SessionProvider in packages/frontend/src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
```

## Build Errors

### TypeScript Compilation Errors
```bash
# Check for type errors across all packages
pnpm type-check

# Fix common issues:
# - Missing return types
# - Unused variables (can disable with eslint)
# - Strict null checks
```

### Monorepo Build Dependencies
```bash
# Build packages in correct order
pnpm --filter @world-artificer/shared build
pnpm --filter @world-artificer/database build
pnpm --filter @world-artificer/backend build
pnpm --filter @world-artificer/frontend build

# Or build all with Turbo (handles dependencies)
pnpm build
```

### Module Resolution Issues
```json
// In turbo.json, ensure proper build dependencies
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    }
  }
}
```

## Performance Issues

### Database Query Performance
```sql
-- Check for slow queries
EXPLAIN ANALYZE SELECT * FROM worlds WHERE user_id = 'some-id';

-- Add missing indexes
CREATE INDEX idx_worlds_user_id ON worlds(user_id);
CREATE INDEX idx_world_entities_world_id ON world_entities(world_id);
```

### Bundle Size Issues
```bash
# Analyze bundle size
pnpm --filter @world-artificer/frontend build
pnpm --filter @world-artificer/frontend analyze

# Look for:
# - Large vendor chunks
# - Duplicate dependencies
# - Unnecessary imports
```

### Memory Leaks
```typescript
// Check for common memory leak patterns:
// 1. Unsubscribed event listeners
useEffect(() => {
  const handleResize = () => {};
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize); // Clean up
  };
}, []);

// 2. Uncleared timers
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  
  return () => {
    clearInterval(timer); // Clean up
  };
}, []);
```

## AI Integration Issues

### OpenAI API Errors
```typescript
// Handle common OpenAI errors
export class AIService {
  async createEmbedding(content: string): Promise<number[]> {
    try {
      const response = await this.openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: content,
      });
      return response.data[0].embedding;
    } catch (error) {
      if (error.status === 429) {
        // Rate limit - implement exponential backoff
        await this.delay(Math.pow(2, retryCount) * 1000);
        return this.createEmbedding(content); // Retry
      }
      
      if (error.status === 401) {
        throw new Error('Invalid OpenAI API key');
      }
      
      throw error;
    }
  }
}
```

### Pinecone Connection Issues
```typescript
// Check Pinecone configuration
export class VectorService {
  constructor() {
    try {
      this.pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!,
      });
    } catch (error) {
      console.error('Pinecone initialization failed:', error);
      throw new Error('Vector database unavailable');
    }
  }
}
```

## Common Error Messages

### "Module not found"
- Check import paths are correct
- Ensure workspace packages are built
- Verify tsconfig.json path mapping

### "Cannot find name 'X'"
- Check if types are exported from correct package
- Regenerate Prisma client after schema changes
- Restart TypeScript server

### "Property 'X' does not exist on type 'Y'"
- Check if interface definitions are up to date
- Ensure proper type imports
- Update type definitions after API changes

### "EADDRINUSE: address already in use"
- Check for port conflicts with `lsof -i :PORT`
- Kill conflicting processes
- Use different ports in development

### "connect ECONNREFUSED"
- Database not running or wrong connection string
- Backend server not started
- Firewall blocking connections

## Getting Help

### Debug Information to Collect
1. **Error messages**: Full stack traces
2. **Environment**: Node.js version, OS, package versions
3. **Steps to reproduce**: Minimal reproduction case
4. **Configuration**: Relevant config files (sanitized)
5. **Logs**: Server logs, browser console, database logs

### Useful Commands for Debugging
```bash
# Check versions
node --version
pnpm --version

# Check package info
pnpm list --depth=0

# Check workspace structure
pnpm list --recursive

# Check environment variables (sanitized)
printenv | grep -E "(NODE_ENV|DATABASE_URL|NEXTAUTH)"
```