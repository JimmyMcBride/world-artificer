# Coding Standards

## TypeScript Configuration
```json
// Strict TypeScript across all packages
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

## Import Organization
```typescript
// Import order (enforced by ESLint + Prettier)
// 1. External libraries
import React from 'react';
import { NextPage } from 'next';
import { z } from 'zod';

// 2. Internal packages
import { api } from '@world-artificer/shared/api';
import { UserSchema } from '@world-artificer/shared/types';

// 3. Relative imports (closest last)
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
```

## Component File Structure
```typescript
// ComponentName.tsx - Standard component file structure

// External imports
import React from 'react';
import { clsx } from 'clsx';

// Internal imports
import { ComponentProps } from '@world-artificer/shared/types';

// Types (if component-specific)
interface LocalProps extends ComponentProps {
  specialProp?: string;
}

// Component implementation
export function ComponentName({ specialProp, ...props }: LocalProps) {
  // Component logic
  return <div>Component content</div>;
}

// Default export (for Next.js pages)
export default ComponentName;
```

## Naming Conventions

### Files and Directories
- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase starting with "use" (`useWorldData.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`UserProfile.types.ts`)
- **API routes**: kebab-case (`world-entities.ts`)

### Variables and Functions
- **Variables**: camelCase (`worldEntities`)
- **Functions**: camelCase (`createWorld`)
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_WORLD_TITLE_LENGTH`)
- **Interfaces**: PascalCase (`WorldEntity`)
- **Types**: PascalCase (`EntityType`)

## Code Organization Principles

### Follow Single Responsibility
Each function, component, and module should have one clear purpose.

### Use Composition Over Inheritance
Prefer composing smaller components and utilities rather than complex inheritance hierarchies.

### Explicit Over Implicit
Be explicit about types, dependencies, and data flow.

### Fail Fast
Use TypeScript strict mode and runtime validation to catch errors early.

## Error Handling Standards

### Use Typed Errors
```typescript
// Define specific error types
export class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends Error {
  constructor(message: string = 'Authentication required') {
    super(message);
    this.name = 'AuthenticationError';
  }
}
```

### Consistent Error Response Format
```typescript
// API error response format
interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, unknown>;
}
```

## Performance Standards

### Database Queries
- Always use `select` to limit returned fields
- Use `include` strategically for related data
- Implement proper indexing for frequently queried fields
- Use transactions for multi-table operations

### Frontend Performance
- Lazy load components when possible
- Optimize images with Next.js Image component
- Use React.memo for expensive components
- Implement proper loading states

### Bundle Size
- Monitor bundle size with regular analysis
- Use dynamic imports for large dependencies
- Tree-shake unused code
- Optimize third-party library usage

## Security Standards

### Input Validation
- Use Zod schemas for all API inputs
- Sanitize user-generated content
- Validate file uploads
- Implement rate limiting

### Authentication
- Use secure session management
- Implement proper CSRF protection
- Hash passwords with bcrypt
- Validate user permissions on all protected routes

### Data Protection
- Never log sensitive information
- Use environment variables for secrets
- Implement proper CORS policies
- Sanitize error messages for production