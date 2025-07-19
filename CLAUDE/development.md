# Development Guide

## Quick Start
```bash
# Install dependencies
pnpm install

# Start all services
pnpm dev

# Generate database client (run first)
pnpm --filter @world-artificer/database db:generate

# Build all packages
pnpm build
```

## Package-Specific Commands
```bash
# Frontend (Next.js)
pnpm --filter @world-artificer/frontend dev
pnpm --filter @world-artificer/frontend build

# Backend (tRPC API)  
pnpm --filter @world-artificer/backend dev
pnpm --filter @world-artificer/backend build

# Database operations
pnpm --filter @world-artificer/database db:generate
pnpm --filter @world-artificer/database db:push
pnpm --filter @world-artificer/database db:migrate

# Shared utilities
pnpm --filter @world-artificer/shared build
```

## Development Tools
```bash
# Code quality
pnpm lint           # ESLint all packages
pnpm lint:fix       # Auto-fix linting issues
pnpm type-check     # TypeScript validation

# Testing (planned)
pnpm test           # Run all tests
pnpm test:watch     # Watch mode testing

# Maintenance
pnpm clean          # Clean build artifacts
pnpm reset          # Full reset and reinstall
```

## Environment Configuration

### Development Setup
```bash
# Required environment variables

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/worldartificer"

# Authentication  
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3001"

# AI Services (when implemented)
OPENAI_API_KEY="sk-your-openai-key"
PINECONE_API_KEY="your-pinecone-key"
PINECONE_ENVIRONMENT="us-east-1"
PINECONE_INDEX_NAME="worldbuilding-vectors"

# Optional: External services
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"
```

## Development Workflow

### Feature Development Process
1. **Create Feature Branch**: `git checkout -b feature/ai-confidence-assessment`
2. **Update Shared Types**: Add types to `packages/shared/src/types/`
3. **Database Changes**: Update Prisma schema, generate client
4. **Backend Implementation**: Add tRPC routes and business logic
5. **Frontend Integration**: Create components and integrate API
6. **Testing**: Add unit/integration tests
7. **Documentation**: Update relevant docs

### Code Review Checklist
- [ ] TypeScript strict mode compliance
- [ ] Proper error handling with user-friendly messages
- [ ] Database queries use proper indexes
- [ ] API inputs validated with Zod schemas
- [ ] Components follow design system patterns
- [ ] Security: Input sanitization and authorization
- [ ] Performance: Avoid N+1 queries, optimize vector operations
- [ ] Accessibility: WCAG compliance for UI components