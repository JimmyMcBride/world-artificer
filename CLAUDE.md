# World Artificer - Claude Development Guide

## Project Overview

**World Artificer** is an AI-powered worldbuilding assistant that solves creative paralysis for writers, game developers, and DMs. The platform builds creative confidence through intelligent AI guidance, helping creators transition from endless worldbuilding to actual story creation.

### Core Value Proposition
"Finally break through worldbuilding paralysis and start your story with confidence"

### Key Objectives
- **Creative Confidence Building**: AI that recognizes when to encourage expansion vs push toward story creation
- **Block Prevention**: Proactive intervention before creative paralysis sets in  
- **RAG-Powered Assistance**: Vector database understanding of world relationships for contextual guidance
- **Story Readiness Assessment**: Clear signals when world is ready for story development

---

## Project Architecture

### Monorepo Structure
```
world-artificer/
├── packages/
│   ├── frontend/          # Next.js 14 app (port 3001)
│   ├── backend/           # tRPC API server (port 3002)  
│   ├── shared/            # Shared types and utilities
│   └── database/          # Prisma schema and client
├── docs/                  # Comprehensive project documentation
├── project-management/    # Epics and user stories
├── research/             # Market research and insights
└── instructions/         # Team guidelines
```

### Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Frontend** | Next.js | 14.0.4 | App Router, server components |
| **Backend** | Express + tRPC | 10.45.0 | Type-safe API |
| **Database** | PostgreSQL + Prisma | 5.7.1 | Structured data with ORM |
| **Vector DB** | Pinecone | Latest | AI embeddings and semantic search |
| **AI Services** | OpenAI API | Latest | GPT-4 + text-embedding-3 |
| **Language** | TypeScript | 5.3+ | Strict mode across all packages |
| **Styling** | Tailwind CSS | 3.4.0 | Utility-first with custom design system |
| **State** | Zustand | 4.4.7 | Client state management |
| **Auth** | NextAuth.js | 4.24.5 | JWT sessions with credentials |
| **Validation** | Zod | 3.22.4 | Runtime validation + TypeScript types |
| **Build** | Turbo | 1.11.0 | Monorepo orchestration |
| **Package Manager** | pnpm | 8.12.0 | Workspace management |

---

## Development Commands

### Quick Start
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

### Package-Specific Commands
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

### Development Tools
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

---

## Core Domain Models

### User Management
```typescript
// User account and authentication
interface User {
  id: string;
  email: string;
  passwordHash: string;
  name?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// User creative preferences
interface UserProfile {
  id: string;
  userId: string;
  experienceLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  preferredGenres: string[];
  communicationStyle: 'ENCOURAGING' | 'DIRECT' | 'DETAILED' | 'MINIMAL';
  notificationPreferences?: NotificationPreferences;
}
```

### World Building Core
```typescript
// Top-level world container
interface World {
  id: string;
  userId: string;
  title: string;
  description?: string;
  genre?: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'COMPLETED';
  confidenceScore: number; // AI-calculated readiness (0-10)
  createdAt: Date;
  updatedAt: Date;
}

// Flexible entity system for all world elements
interface WorldEntity {
  id: string;
  worldId: string;
  type: 'CHARACTER' | 'LOCATION' | 'FACTION' | 'EVENT' | 'CONCEPT' | 'ITEM';
  name: string;
  description?: string;
  embeddingId?: string; // Pinecone vector ID for AI search
  createdAt: Date;
  updatedAt: Date;
}

// Relationships between entities
interface EntityRelationship {
  id: string;
  sourceEntityId: string;
  targetEntityId: string;
  type: 'ALLY' | 'ENEMY' | 'FAMILY' | 'LOCATION' | 'MEMBER' | 'CUSTOM';
  strength: number; // 0-10 relationship strength
  description?: string;
  discoveredBy: 'USER' | 'AI'; // How relationship was identified
}
```

### Content Management
```typescript
// Flexible content system
interface WorldContent {
  id: string;
  worldId: string;
  type: 'NOTE' | 'DOCUMENT' | 'BRAINDUMP' | 'TEMPLATE';
  title: string;
  content: string; // Rich text content
  tags: string[];
  embeddingId?: string; // For AI analysis
  createdAt: Date;
  updatedAt: Date;
}
```

### AI Analysis System
```typescript
// AI-powered confidence and readiness assessment
interface ConfidenceAssessment {
  id: string;
  worldId: string;
  overallScore: number; // 0-10 story readiness
  characterDevelopment: number;
  worldBuilding: number;
  conflictPotential: number;
  themeClarity: number;
  recommendations: string[];
  suggestedStoryTypes: string[];
  analyzedAt: Date;
}

// Creative block detection and intervention
interface CreativeSession {
  id: string;
  userId: string;
  worldId?: string;
  startTime: Date;
  endTime?: Date;
  durationMinutes?: number;
  activitiesCount: number;
  blocksDetected: string[]; // Types of blocks identified
  interventionOffered: boolean;
  confidenceChange: number; // Change in confidence during session
}
```

---

## API Architecture (tRPC)

### Router Structure
```typescript
// Main application router
export const appRouter = router({
  auth: authRouter,        // Authentication and user management
  world: worldRouter,      // World CRUD operations
  entity: entityRouter,    // Entity management
  content: contentRouter,  // Content management
  ai: aiRouter,           // AI analysis and chat
  vector: vectorRouter,   // Vector database operations
});

export type AppRouter = typeof appRouter;
```

### Core API Patterns
```typescript
// Protected procedure pattern
const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx: { ...ctx, user: ctx.session.user } });
});

// Example world router
const worldRouter = router({
  // Get user's worlds
  getUserWorlds: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.db.world.findMany({
        where: { userId: ctx.user.id },
        include: { entities: true, content: true }
      });
    }),

  // Create new world
  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1).max(255),
      description: z.string().max(1000).optional(),
      genre: z.string().max(100).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.world.create({
        data: { ...input, userId: ctx.user.id }
      });
    }),

  // AI confidence assessment
  assessConfidence: protectedProcedure
    .input(z.object({ worldId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      // RAG-powered analysis implementation
      const world = await ctx.db.world.findUnique({
        where: { id: input.worldId },
        include: { entities: true, content: true }
      });
      
      // AI analysis logic here
      return aiService.assessWorldConfidence(world);
    }),
});
```

---

## Database Schema

### Core Tables
```sql
-- User management
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- World containers
CREATE TABLE worlds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  genre VARCHAR(100),
  status VARCHAR(20) DEFAULT 'ACTIVE',
  confidence_score DECIMAL(3,2) DEFAULT 0.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Flexible entity system
CREATE TABLE world_entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id UUID NOT NULL REFERENCES worlds(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  embedding_id VARCHAR(255), -- Pinecone vector ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Entity relationships
CREATE TABLE entity_relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_entity_id UUID NOT NULL REFERENCES world_entities(id) ON DELETE CASCADE,
  target_entity_id UUID NOT NULL REFERENCES world_entities(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  strength DECIMAL(3,2) DEFAULT 1.0,
  description TEXT,
  discovered_by VARCHAR(10) DEFAULT 'USER',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Key Indexes
```sql
-- Performance indexes
CREATE INDEX idx_worlds_user_id ON worlds(user_id);
CREATE INDEX idx_world_entities_world_id ON world_entities(world_id);
CREATE INDEX idx_world_entities_type ON world_entities(type);
CREATE INDEX idx_entity_relationships_source ON entity_relationships(source_entity_id);
CREATE INDEX idx_world_entities_embedding_id ON world_entities(embedding_id);
```

---

## Frontend Architecture

### Component Organization
```
packages/frontend/src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Dashboard layout group
│   │   ├── dashboard/      # Main dashboard
│   │   ├── worlds/         # World management
│   │   │   ├── [id]/      # Individual world pages
│   │   │   └── new/       # Create world
│   │   └── settings/      # User settings
│   ├── (auth)/            # Authentication layout
│   │   ├── login/
│   │   ├── register/
│   │   └── callback/
│   └── api/               # API routes (tRPC)
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── ui/               # Base UI components
│   ├── world/            # World-specific components
│   └── dashboard/        # Dashboard components
├── lib/                  # Frontend utilities
│   ├── auth.ts          # NextAuth configuration
│   ├── api.ts           # tRPC client setup
│   └── utils.ts         # General utilities
└── styles/              # Global styles and Tailwind config
```

### Component Patterns
```typescript
// Standard component interface
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// Component implementation with clsx for conditional styling
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className, 
  children, 
  ...props 
}: ComponentProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border border-input hover:bg-accent hover:text-accent-foreground': variant === 'outline',
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
      ) : null}
      {children}
    </button>
  );
}
```

### tRPC Client Setup
```typescript
// lib/api.ts - tRPC client configuration
import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@world-artificer/backend';

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
          headers() {
            return {
              authorization: getAuthHeader(),
            };
          },
        }),
      ],
    };
  },
  ssr: false,
});

// Usage in components
export function WorldList() {
  const { data: worlds, isLoading } = api.world.getUserWorlds.useQuery();
  const createWorld = api.world.create.useMutation();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {worlds?.map(world => (
        <div key={world.id}>{world.title}</div>
      ))}
    </div>
  );
}
```

---

## AI Integration Architecture

### RAG Pipeline (Planned)
```typescript
// AI service interface for RAG implementation
interface AIService {
  // Generate embeddings for world content
  createEmbedding(content: string): Promise<number[]>;
  
  // Semantic search for related content
  searchSimilar(
    query: string, 
    worldId: string, 
    options?: { limit?: number; threshold?: number }
  ): Promise<SearchResult[]>;
  
  // Analyze world for confidence and story readiness
  assessWorldConfidence(world: WorldWithEntities): Promise<ConfidenceAssessment>;
  
  // Detect creative blocks in user behavior
  detectCreativeBlocks(sessionData: SessionData): Promise<BlockAnalysis>;
  
  // Generate contextual suggestions
  generateSuggestions(
    context: WorldContext, 
    userMessage: string
  ): Promise<AISuggestion[]>;
}

// Vector database operations
interface VectorService {
  // Store entity embeddings in Pinecone
  upsertEntity(entity: WorldEntity, embedding: number[]): Promise<void>;
  
  // Search for semantically similar entities
  searchSimilar(
    queryVector: number[], 
    worldId: string
  ): Promise<VectorSearchResult[]>;
  
  // Discover relationships between entities
  discoverRelationships(worldId: string): Promise<RelationshipSuggestion[]>;
}
```

### Confidence Building System
```typescript
// Creative confidence assessment
interface ConfidenceMetrics {
  characterDepth: number;      // Character development completeness
  worldCohesion: number;       // World consistency and detail
  conflictPotential: number;   // Story conflict opportunities
  themeClarity: number;        // Theme development
  storyHooks: number;         // Available story starting points
}

// Block detection patterns
interface BlockDetection {
  endlessWorldbuilding: boolean;  // Too much detail, no story progress
  analysisParalysis: boolean;      // Stuck on decisions
  perfectionismLoop: boolean;      // Endless editing/refinement
  scopeCreep: boolean;            // World becoming too complex
}

// AI intervention strategies
interface InterventionStrategy {
  blockType: string;
  severity: 'low' | 'medium' | 'high';
  suggestions: string[];
  encouragement: string;
  nextSteps: string[];
}
```

---

## Code Standards

### TypeScript Configuration
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

### Import Organization
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

### Component File Structure
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

### Database Query Patterns
```typescript
// Consistent Prisma query patterns
export class WorldService {
  // Always include related data explicitly
  async getWorldWithEntities(worldId: string) {
    return prisma.world.findUnique({
      where: { id: worldId },
      include: {
        entities: {
          include: {
            relationships: {
              include: {
                targetEntity: true
              }
            }
          }
        },
        content: true,
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });
  }

  // Use transactions for multi-table operations
  async createWorldWithEntities(data: CreateWorldData) {
    return prisma.$transaction(async (tx) => {
      const world = await tx.world.create({ data: data.world });
      
      if (data.entities?.length) {
        await tx.worldEntity.createMany({
          data: data.entities.map(entity => ({
            ...entity,
            worldId: world.id
          }))
        });
      }
      
      return world;
    });
  }
}
```

---

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

### Port Configuration
- **Frontend**: http://localhost:3001 (Next.js)
- **Backend**: http://localhost:3002 (Express/tRPC)
- **Database**: localhost:5432 (PostgreSQL)

---

## Testing Strategy

### Testing Architecture (Planned)
```
Testing Pyramid:
    E2E Tests (Playwright)
   /                    \
Integration Tests (Jest)
/                      \
Frontend Unit (Vitest)  Backend Unit (Jest)
```

### Test File Organization
```
packages/*/tests/
├── unit/           # Unit tests
├── integration/    # Integration tests  
├── fixtures/       # Test data
├── helpers/        # Test utilities
└── setup.ts       # Test configuration
```

### Testing Patterns
```typescript
// Unit test example
import { validateWorldEntity } from '../validation';

describe('validateWorldEntity', () => {
  it('should validate character entity', () => {
    const entity = {
      type: 'CHARACTER',
      name: 'Aria Brightblade',
      description: 'A skilled elven warrior'
    };
    
    expect(validateWorldEntity(entity)).toEqual({
      success: true,
      data: entity
    });
  });
});

// Integration test example
import { appRouter } from '../router';

describe('World API', () => {
  it('should create world and return with entities', async () => {
    const caller = appRouter.createCaller({ user: mockUser, db: mockDb });
    
    const result = await caller.world.create({
      title: 'Test World',
      description: 'A test world'
    });
    
    expect(result.title).toBe('Test World');
    expect(result.userId).toBe(mockUser.id);
  });
});
```

---

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

### Common Patterns to Follow

#### Error Handling
```typescript
// Frontend error handling
export function useWorldMutation() {
  const mutation = api.world.create.useMutation({
    onError: (error) => {
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/login');
      } else {
        toast.error(error.message || 'Something went wrong');
      }
    },
    onSuccess: (world) => {
      toast.success(`World "${world.title}" created!`);
      router.push(`/worlds/${world.id}`);
    }
  });
  
  return mutation;
}

// Backend error handling
export const worldRouter = router({
  create: protectedProcedure
    .input(CreateWorldSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.world.create({
          data: { ...input, userId: ctx.user.id }
        });
      } catch (error) {
        if (error.code === 'P2002') { // Unique constraint
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'A world with this name already exists'
          });
        }
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create world'
        });
      }
    })
});
```

#### Form Handling
```typescript
// Form component with validation
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateWorldSchema } from '@world-artificer/shared/validation';

export function CreateWorldForm() {
  const form = useForm({
    resolver: zodResolver(CreateWorldSchema),
    defaultValues: {
      title: '',
      description: '',
      genre: ''
    }
  });
  
  const createWorld = api.world.create.useMutation();
  
  const onSubmit = async (data: CreateWorldFormData) => {
    try {
      await createWorld.mutateAsync(data);
    } catch (error) {
      // Error handled by mutation onError
    }
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register('title')} />
      {form.formState.errors.title && (
        <span className="text-red-500">{form.formState.errors.title.message}</span>
      )}
      <button type="submit" disabled={createWorld.isLoading}>
        {createWorld.isLoading ? 'Creating...' : 'Create World'}
      </button>
    </form>
  );
}
```

---

## Performance Guidelines

### Frontend Optimization
- **Code Splitting**: Use dynamic imports for heavy components
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Analysis**: Regular bundle size monitoring
- **Lazy Loading**: Defer non-critical component loading

### Backend Optimization
- **Database Queries**: Use `select` and `include` strategically
- **Caching**: Redis for frequently accessed data
- **Batch Operations**: Combine multiple DB operations
- **Vector Operations**: Optimize Pinecone queries for <500ms response

### AI Cost Management
- **Embedding Caching**: Cache vector embeddings in Redis
- **Context Optimization**: Limit context window size for GPT-4
- **Batch Processing**: Group multiple AI operations
- **Fallback Strategies**: Graceful degradation when AI services unavailable

---

## Security Considerations

### Authentication & Authorization
- **JWT Tokens**: Secure session management with NextAuth.js
- **Password Security**: Bcrypt hashing with proper salt rounds  
- **Session Validation**: Verify user permissions on all protected routes
- **Input Validation**: Zod schemas on all API inputs

### Data Protection
- **SQL Injection**: Prisma ORM prevents direct SQL
- **XSS Prevention**: React built-in protection + input sanitization
- **CSRF Protection**: NextAuth.js built-in CSRF tokens
- **Secrets Management**: Environment variables, never committed

### API Security
- **Rate Limiting**: Prevent API abuse (planned)
- **CORS Configuration**: Restrict origins appropriately
- **Error Handling**: Don't leak sensitive information
- **Audit Logging**: Track user actions (planned)

---

## Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check database URL format
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# Regenerate Prisma client
pnpm --filter @world-artificer/database db:generate

# Reset database (dev only)
pnpm --filter @world-artificer/database db:reset
```

#### Frontend Import Errors
```bash
# Clear Next.js cache
rm -rf packages/frontend/.next

# Reinstall dependencies
pnpm install

# Check workspace package linking
pnpm --filter @world-artificer/frontend build
```

#### tRPC Type Issues
```bash
# Regenerate types after schema changes
pnpm build

# Restart TypeScript server in editor
# VS Code: Cmd+Shift+P > "TypeScript: Restart TS Server"
```

#### Port Conflicts
```bash
# Check what's using ports
lsof -i :3001 # Frontend
lsof -i :3002 # Backend

# Kill processes if needed
kill -9 <PID>
```

---

## Documentation References

### Project Documentation
- **[Project Brief](./docs/ai-worldbuilding-brief.md)**: Strategic overview and market analysis
- **[PRD](./docs/ai-worldbuilding-prd.md)**: Detailed product requirements
- **[Architecture](./docs/ai-worldbuilding-architecture.md)**: Technical architecture
- **[Frontend Spec](./docs/ai-worldbuilding-frontend-spec.md)**: UI/UX specifications

### Development Resources
- **[Epic Management](./project-management/)**: User stories and development phases
- **[Research](./research/)**: Market research and user insights
- **[Team Instructions](./instructions/)**: Team-specific guidelines

### External Documentation
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zod Validation](https://zod.dev/)

---

## Project Roadmap

### Current Status: Epic 1 - Foundation ✅
- [x] Monorepo setup with Turbo
- [x] Frontend: Next.js 14 with App Router
- [x] Backend: tRPC API with Express
- [x] Database: Prisma with PostgreSQL 
- [x] Authentication: NextAuth.js with credentials
- [x] Basic world and entity management

### Next: Epic 2 - AI Integration 🔄
- [ ] Vector database integration (Pinecone)
- [ ] OpenAI API integration for embeddings
- [ ] RAG pipeline for contextual AI assistance
- [ ] Confidence assessment algorithms
- [ ] Relationship discovery system

### Future: Epic 3 - Block Prevention 📋
- [ ] Creative block detection patterns
- [ ] Intelligent intervention system
- [ ] Story readiness assessment
- [ ] Progress celebration and momentum tracking

### Future: Epic 4 - Polish & Scale 📋
- [ ] Performance optimization
- [ ] Creator segment customization
- [ ] Advanced UI/UX polish
- [ ] Analytics and monitoring

---

## Contact & Support

For questions about this codebase:
1. Check existing documentation in `/docs/`
2. Review user stories in `/project-management/`
3. Consult market research in `/research/`
4. Refer to team instructions in `/instructions/`

This guide provides the foundation for consistent, high-quality development on the World Artificer platform. Keep it updated as the project evolves and new patterns emerge.