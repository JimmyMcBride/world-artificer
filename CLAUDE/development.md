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
8. **🔄 COMMIT CHANGES**: Always commit work after completing todo tasks

## Git Workflow

### Committing Changes (Required After Todo Completion)

**ALWAYS commit your work after finishing any todo list that involves codebase changes:**

```bash
# 1. Review what changed
git status                    # See modified/new files
git diff                      # Review unstaged changes
git log --oneline -5          # Check recent commit style

# 2. Stage relevant files
git add <files>              # Add specific files
# OR
git add .                    # Add all changes (use carefully)

# 3. Create descriptive commit
git commit -m "$(cat <<'EOF'
Brief summary of changes (50 chars or less)

Detailed explanation of what was changed and why:
- List key modifications
- New features added
- Bugs fixed
- Architecture changes

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Verify commit succeeded
git status                   # Should show clean working tree
```

### Commit Message Guidelines

#### Good Commit Messages
```bash
# Feature addition
"Add world confidence assessment API endpoint

Implement tRPC endpoint for AI-powered world analysis:
- New assessConfidence procedure with Zod validation
- Integration with OpenAI service for content analysis
- Return confidence metrics for story readiness
- Add proper error handling for AI service failures"

# Bug fix
"Fix entity relationship query N+1 performance issue

Replace individual entity fetches with single include query:
- Use Prisma include for targetEntity in relationships
- Reduces database queries from O(n) to O(1)
- Improves page load time from 2s to 300ms"

# Refactoring
"Refactor component props to use consistent patterns

Standardize component interfaces across UI library:
- Extract common props to BaseComponentProps
- Apply size/variant patterns consistently
- Update Button, Input, and Card components
- Maintain backwards compatibility"
```

#### Avoid These Patterns
```bash
# Too vague
"Update stuff"
"Fix bug"
"WIP"

# Too long (over 50 chars in summary)
"Add a new feature that allows users to create and manage world entities with relationships"

# Missing context
"Change database schema"
"Update API"
```

### Code Review Checklist
- [ ] TypeScript strict mode compliance
- [ ] Proper error handling with user-friendly messages
- [ ] Database queries use proper indexes
- [ ] API inputs validated with Zod schemas
- [ ] Components follow design system patterns
- [ ] Security: Input sanitization and authorization
- [ ] Performance: Avoid N+1 queries, optimize vector operations
- [ ] Accessibility: WCAG compliance for UI components