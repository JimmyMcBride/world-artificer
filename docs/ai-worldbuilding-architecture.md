# AI Worldbuilding Assistant Fullstack Architecture Document

## Introduction

This document outlines the complete fullstack architecture for the AI Worldbuilding Assistant, including backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development, ensuring consistency across the entire technology stack while delivering the confidence-building creative experience that addresses worldbuilding paralysis.

This unified approach combines backend AI services, vector database operations, and frontend creative interfaces to create a seamless platform where creators can build worlds with confidence and transition successfully to story creation.

### Starter Template or Existing Project
**Decision:** Custom Next.js + tRPC monorepo architecture  
**Rationale:** Given the unique AI-first requirements and complex RAG architecture needs, we'll build a custom foundation optimized for creative workflows rather than adapting existing templates that weren't designed for vector database integration and real-time AI assistance.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2025-01-18 | 1.0 | Initial fullstack architecture | Architect |

## High Level Architecture

### Technical Summary

The AI Worldbuilding Assistant uses a modern fullstack architecture centered around RAG (Retrieval-Augmented Generation) patterns for creative confidence building. The system combines Next.js frontend with Node.js backend services, integrating Pinecone vector database for semantic world understanding and OpenAI for natural language processing. The architecture prioritizes real-time creative experiences with <2 second AI responses and <500ms vector queries, while maintaining cost-effective AI token usage through intelligent caching and context optimization.

### Platform and Infrastructure Choice

**Platform:** Vercel + AWS Hybrid Architecture  
**Key Services:** Vercel (frontend hosting), AWS Lambda (backend functions), Pinecone (vector database), Supabase (PostgreSQL), OpenAI (AI services)  
**Deployment Host and Regions:** Vercel Edge Network globally, AWS us-east-1 primary with us-west-2 failover

**Rationale:** Vercel provides optimal Next.js hosting with edge computing for fast global access, while AWS Lambda offers cost-effective scaling for AI workloads. This hybrid approach balances performance, cost, and developer experience for a solo developer building an AI-first platform.

### Repository Structure

**Structure:** Turborepo Monorepo  
**Monorepo Tool:** Turborepo for optimal TypeScript and Next.js performance  
**Package Organization:** Shared types and utilities between frontend and backend, with clear separation of concerns for AI services

### High Level Architecture Diagram

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Next.js App] --> B[React Components]
        A --> C[tRPC Client]
        B --> D[AI Chat Interface]
        B --> E[Relationship Visualizer]
        B --> F[Confidence Dashboard]
    end
    
    subgraph "API Layer"
        G[tRPC Router] --> H[AI Service]
        G --> I[Vector Service]
        G --> J[World Service]
        G --> K[User Service]
    end
    
    subgraph "AI & Vector Layer"
        H --> L[OpenAI API]
        I --> M[Pinecone Vector DB]
        H --> N[RAG Pipeline]
        N --> M
        N --> L
    end
    
    subgraph "Data Layer"
        J --> O[Supabase PostgreSQL]
        K --> O
        P[Redis Cache] --> G
    end
    
    subgraph "External Services"
        Q[Auth0] --> A
        R[Vercel Analytics] --> A
        S[Sentry Monitoring] --> A
    end
    
    A --> G
    I --> P
    H --> P
```

### Architectural Patterns

- **RAG (Retrieval-Augmented Generation):** Core pattern for AI assistant combining vector search with LLM generation for contextually aware creative guidance - _Rationale:_ Enables intelligent relationship discovery and confidence building based on actual world content
- **Event-Driven Updates:** WebSocket connections for real-time collaboration and AI response streaming - _Rationale:_ Maintains creative flow with immediate feedback and prevents user frustration during AI processing
- **Repository Pattern:** Abstract data access for both PostgreSQL and vector operations - _Rationale:_ Enables clean separation between structured data and vector operations while maintaining type safety
- **Service Layer Architecture:** Clear separation between AI, vector, world, and user services - _Rationale:_ Supports independent scaling and testing of AI-intensive operations vs standard CRUD operations
- **Optimistic UI Updates:** Frontend updates immediately with server reconciliation - _Rationale:_ Critical for creative flow where any perceived delay disrupts the creative process

## Tech Stack

This is the DEFINITIVE technology selection for the entire project. All development must use these exact versions.

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Frontend Language | TypeScript | 5.3.3 | Type safety across stack | Essential for AI service integration and preventing runtime errors |
| Frontend Framework | Next.js | 14.1.0 | Full-stack React framework | App Router, server components, edge runtime support |
| UI Component Library | Radix UI | 1.0.4 | Accessible component primitives | WCAG compliance requirement with custom styling flexibility |
| State Management | Zustand | 4.4.7 | Client state management | Lightweight, TypeScript-first for creative session state |
| Backend Language | TypeScript | 5.3.3 | Unified language across stack | Shared types between frontend and backend |
| Backend Framework | tRPC | 10.45.0 | Type-safe API layer | End-to-end type safety for AI service calls |
| API Style | tRPC | 10.45.0 | Type-safe RPC calls | Eliminates API versioning issues for rapid AI feature iteration |
| Database | PostgreSQL | 15.5 | Structured data storage | User accounts, world metadata, session tracking |
| Cache | Redis | 7.2.3 | AI response and vector caching | Critical for AI cost management and performance |
| File Storage | Vercel Blob | Latest | Asset storage for worlds | Integrated with Vercel deployment pipeline |
| Authentication | Auth0 | Latest | User authentication | Social login support for creative community features |
| Frontend Testing | Vitest | 1.1.0 | Fast unit testing | Vite-native testing for component and service testing |
| Backend Testing | Jest | 29.7.0 | API and service testing | Mature ecosystem for testing AI service integrations |
| E2E Testing | Playwright | 1.40.0 | Creative workflow testing | Cross-browser testing for complex AI interactions |
| Build Tool | Turborepo | 1.11.0 | Monorepo build orchestration | Optimized for TypeScript projects with shared dependencies |
| Bundler | Next.js/Webpack | Latest | Code bundling | Built-in optimization for React and TypeScript |
| IaC Tool | AWS CDK | 2.115.0 | Infrastructure as Code | TypeScript-based infrastructure for AWS resources |
| CI/CD | Vercel + GitHub Actions | Latest | Deployment pipeline | Automatic deployment with preview environments |
| Monitoring | Sentry | 7.91.0 | Error tracking | AI service error monitoring and performance tracking |
| Logging | Pino | 8.17.0 | Structured logging | High-performance logging for AI service debugging |
| CSS Framework | Tailwind CSS | 3.4.0 | Utility-first styling | Rapid UI development with design system consistency |
| Vector Database | Pinecone | Latest API | Semantic search and RAG | Managed vector database for production reliability |
| AI Services | OpenAI API | Latest | Language model access | GPT-4 for conversation, text-embedding-3 for vectors |

## Data Models

### Core Data Models and TypeScript Interfaces

#### User
**Purpose:** User account and creative preferences management
**Key Attributes:**
- id: string - Unique user identifier
- email: string - User email for authentication
- creatorType: 'author' | 'gamedev' | 'dm' - Creator segment for personalized UX
- preferences: UserPreferences - Creative confidence settings and UI customization
- subscription: SubscriptionTier - Billing and feature access level

```typescript
interface User {
  id: string;
  email: string;
  creatorType: 'author' | 'gamedev' | 'dm';
  preferences: UserPreferences;
  subscription: SubscriptionTier;
  createdAt: Date;
  updatedAt: Date;
}

interface UserPreferences {
  confidenceThreshold: number;
  interventionFrequency: 'low' | 'medium' | 'high';
  aiPersonality: 'encouraging' | 'analytical' | 'minimal';
  blockDetectionEnabled: boolean;
}
```

**Relationships:**
- **One-to-Many with World:** User creates multiple worlds
- **One-to-Many with CreativeSession:** User has multiple creative sessions

#### World
**Purpose:** Container for all worldbuilding content with metadata for AI analysis
**Key Attributes:**
- id: string - Unique world identifier
- name: string - World name and description
- entities: WorldEntity[] - Characters, locations, factions, concepts
- confidenceScore: number - AI-calculated story readiness score
- lastAnalyzed: Date - Vector database sync timestamp

```typescript
interface World {
  id: string;
  userId: string;
  name: string;
  description?: string;
  entities: WorldEntity[];
  confidenceScore: number;
  storyReadiness: StoryReadinessAssessment;
  lastAnalyzed: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface StoryReadinessAssessment {
  overall: number;
  characters: number;
  worldbuilding: number;
  conflicts: number;
  themes: number;
  recommendedStoryTypes: string[];
}
```

**Relationships:**
- **Many-to-One with User:** World belongs to user
- **One-to-Many with WorldEntity:** World contains multiple entities
- **One-to-Many with AIInteraction:** World has conversation history

#### WorldEntity
**Purpose:** Individual elements of world (characters, locations, concepts) with vector embeddings
**Key Attributes:**
- id: string - Unique entity identifier
- type: EntityType - Character, location, faction, concept, event
- content: string - Rich text content for AI analysis
- vectorId: string - Pinecone vector identifier for semantic search
- relationships: EntityRelationship[] - Connections to other entities

```typescript
interface WorldEntity {
  id: string;
  worldId: string;
  type: 'character' | 'location' | 'faction' | 'concept' | 'event';
  name: string;
  content: string;
  vectorId: string;
  relationships: EntityRelationship[];
  metadata: EntityMetadata;
  createdAt: Date;
  updatedAt: Date;
}

interface EntityRelationship {
  targetEntityId: string;
  type: 'ally' | 'enemy' | 'family' | 'location' | 'member' | 'custom';
  strength: number;
  description?: string;
  discoveredBy: 'user' | 'ai';
}
```

**Relationships:**
- **Many-to-One with World:** Entity belongs to world
- **Many-to-Many self-referential:** Entities relate to other entities
- **One-to-One with Vector:** Entity has corresponding vector embedding

#### AIInteraction
**Purpose:** Conversation history and creative confidence building tracking
**Key Attributes:**
- id: string - Unique interaction identifier
- type: InteractionType - Chat, block intervention, confidence assessment
- context: AIContext - World state and creative session information
- response: string - AI assistant response
- confidence_impact: number - Effect on user creative confidence

```typescript
interface AIInteraction {
  id: string;
  userId: string;
  worldId?: string;
  type: 'chat' | 'block_intervention' | 'confidence_assessment' | 'story_transition';
  userMessage: string;
  aiResponse: string;
  context: AIContext;
  confidenceImpact: number;
  createdAt: Date;
}

interface AIContext {
  currentEntities: string[];
  sessionDuration: number;
  detectedBlocks: string[];
  confidenceScore: number;
  storyReadiness: boolean;
}
```

**Relationships:**
- **Many-to-One with User:** Interaction belongs to user
- **Many-to-One with World:** Interaction relates to world context

## API Specification

### tRPC Router Definitions

```typescript
export const appRouter = router({
  // Authentication and user management
  auth: authRouter,
  
  // World management operations
  world: worldRouter,
  
  // AI assistant and RAG operations
  ai: aiRouter,
  
  // Vector database operations
  vector: vectorRouter,
  
  // Analytics and confidence tracking
  analytics: analyticsRouter,
});

// World management router
const worldRouter = router({
  create: protectedProcedure
    .input(z.object({ name: z.string(), description: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      // Create world and initialize vector space
    }),
    
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      // Fetch world with entities and relationships
    }),
    
  updateEntity: protectedProcedure
    .input(updateEntitySchema)
    .mutation(async ({ ctx, input }) => {
      // Update entity and refresh vector embeddings
    }),
    
  getConfidenceAssessment: protectedProcedure
    .input(z.object({ worldId: z.string() }))
    .query(async ({ ctx, input }) => {
      // Run RAG-based confidence assessment
    }),
});

// AI assistant router with RAG integration
const aiRouter = router({
  chat: protectedProcedure
    .input(chatInputSchema)
    .mutation(async ({ ctx, input }) => {
      // Process chat with RAG pipeline
    }),
    
  detectBlocks: protectedProcedure
    .input(z.object({ worldId: z.string(), sessionData: z.any() }))
    .query(async ({ ctx, input }) => {
      // Analyze patterns for creative blocks
    }),
    
  generateSuggestions: protectedProcedure
    .input(suggestionInputSchema)
    .query(async ({ ctx, input }) => {
      // Generate contextual creative suggestions
    }),
    
  assessStoryReadiness: protectedProcedure
    .input(z.object({ worldId: z.string() }))
    .query(async ({ ctx, input }) => {
      // Comprehensive story readiness analysis
    }),
});

// Vector operations router
const vectorRouter = router({
  searchSimilar: protectedProcedure
    .input(z.object({ entityId: z.string(), limit: z.number() }))
    .query(async ({ ctx, input }) => {
      // Find similar entities using vector search
    }),
    
  discoverRelationships: protectedProcedure
    .input(z.object({ worldId: z.string() }))
    .query(async ({ ctx, input }) => {
      // AI-powered relationship discovery
    }),
    
  updateEmbeddings: protectedProcedure
    .input(z.object({ entityId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Refresh vector embeddings for entity
    }),
});
```

## Components

### AI Service Component
**Responsibility:** Core RAG pipeline orchestration, OpenAI integration, and creative confidence analysis

**Key Interfaces:**
- `generateResponse(context: AIContext, userMessage: string): Promise<AIResponse>`
- `assessConfidence(worldData: WorldData): Promise<ConfidenceScore>`
- `detectCreativeBlocks(sessionData: SessionData): Promise<BlockAnalysis>`

**Dependencies:** OpenAI API, Vector Service, World Service  
**Technology Stack:** TypeScript, OpenAI SDK, custom RAG pipeline implementation

### Vector Service Component
**Responsibility:** Pinecone vector database operations, semantic search, and relationship discovery

**Key Interfaces:**
- `createEmbedding(content: string): Promise<number[]>`
- `searchSimilar(vectorId: string, threshold: number): Promise<SearchResult[]>`
- `discoverRelationships(worldId: string): Promise<RelationshipSuggestion[]>`

**Dependencies:** Pinecone client, OpenAI embeddings, Redis cache  
**Technology Stack:** Pinecone SDK, OpenAI text-embedding-3, Redis for vector caching

### World Service Component
**Responsibility:** World content management, entity operations, and consistency tracking

**Key Interfaces:**
- `createEntity(worldId: string, entityData: EntityInput): Promise<WorldEntity>`
- `updateEntity(entityId: string, updates: EntityUpdate): Promise<WorldEntity>`
- `getWorldWithRelationships(worldId: string): Promise<WorldWithRelationships>`

**Dependencies:** PostgreSQL database, Vector Service for embedding updates  
**Technology Stack:** Prisma ORM, PostgreSQL, TypeScript

### Frontend AI Chat Component
**Responsibility:** Real-time AI conversation interface with streaming responses and confidence building

**Key Interfaces:**
- React component with WebSocket connection for streaming
- Context-aware message composition with world entity references
- Block intervention UI with gentle intervention prompts

**Dependencies:** tRPC client, WebSocket connection, Zustand state management  
**Technology Stack:** React, TypeScript, tRPC, WebSocket

### Relationship Visualizer Component
**Responsibility:** Interactive graph visualization of world entity relationships with real-time updates

**Key Interfaces:**
- D3.js-powered graph rendering with zoom and pan
- Real-time relationship updates via WebSocket
- Click-to-edit entity details with vector similarity highlighting

**Dependencies:** D3.js, tRPC client, Vector Service results  
**Technology Stack:** React, D3.js, TypeScript, SVG rendering

## Core Workflows

### RAG-Powered AI Assistant Workflow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant API as tRPC API
    participant AI as AI Service
    participant V as Vector Service
    participant P as Pinecone
    participant O as OpenAI
    
    U->>F: Send message to AI assistant
    F->>API: ai.chat({ message, worldId, context })
    API->>V: Get relevant world context
    V->>P: Vector similarity search
    P-->>V: Related entities and content
    V-->>API: Contextual world data
    API->>AI: Process with RAG pipeline
    AI->>O: Generate embeddings for context
    O-->>AI: Context embeddings
    AI->>O: Generate response with context
    O-->>AI: AI response
    AI-->>API: Structured response with confidence
    API-->>F: Stream response chunks
    F-->>U: Real-time AI conversation
```

### Creative Block Detection and Intervention

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant API as tRPC API
    participant AI as AI Service
    participant A as Analytics
    
    U->>F: Creative session activity
    F->>API: Track session metrics
    API->>A: Analyze behavior patterns
    A->>AI: Check for block indicators
    AI-->>A: Block risk assessment
    A-->>API: Block detection result
    
    alt Block Detected
        API->>AI: Generate intervention
        AI-->>API: Gentle intervention suggestion
        API-->>F: Block intervention UI
        F-->>U: Optional support offer
    else Continue Monitoring
        API-->>F: Continue session tracking
    end
```

### Story Readiness Assessment Workflow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant API as tRPC API
    participant AI as AI Service
    participant V as Vector Service
    participant W as World Service
    
    U->>F: Request story readiness check
    F->>API: ai.assessStoryReadiness({ worldId })
    API->>W: Get complete world data
    W-->>API: World entities and relationships
    API->>V: Analyze world content depth
    V-->>API: Content analysis results
    API->>AI: Run comprehensive assessment
    AI-->>API: Story readiness scores
    API-->>F: Confidence dashboard data
    F-->>U: Story readiness visualization
```

## Database Schema

### PostgreSQL Schema Design

```sql
-- Users and authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  creator_type VARCHAR(20) CHECK (creator_type IN ('author', 'gamedev', 'dm')),
  preferences JSONB DEFAULT '{}',
  subscription JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Worlds and worldbuilding projects
CREATE TABLE worlds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  confidence_score DECIMAL(3,2) DEFAULT 0.0,
  story_readiness JSONB DEFAULT '{}',
  last_analyzed TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- World entities (characters, locations, etc.)
CREATE TABLE world_entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id UUID NOT NULL REFERENCES worlds(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('character', 'location', 'faction', 'concept', 'event')),
  name VARCHAR(255) NOT NULL,
  content TEXT,
  vector_id VARCHAR(255) UNIQUE, -- Pinecone vector ID
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Entity relationships
CREATE TABLE entity_relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_entity_id UUID NOT NULL REFERENCES world_entities(id) ON DELETE CASCADE,
  target_entity_id UUID NOT NULL REFERENCES world_entities(id) ON DELETE CASCADE,
  relationship_type VARCHAR(50) NOT NULL,
  strength DECIMAL(3,2) DEFAULT 1.0,
  description TEXT,
  discovered_by VARCHAR(20) DEFAULT 'user' CHECK (discovered_by IN ('user', 'ai')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(source_entity_id, target_entity_id, relationship_type)
);

-- AI interactions and conversation history
CREATE TABLE ai_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  world_id UUID REFERENCES worlds(id) ON DELETE CASCADE,
  interaction_type VARCHAR(50) NOT NULL,
  user_message TEXT,
  ai_response TEXT,
  context JSONB DEFAULT '{}',
  confidence_impact DECIMAL(3,2) DEFAULT 0.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Creative sessions and analytics
CREATE TABLE creative_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  world_id UUID REFERENCES worlds(id) ON DELETE CASCADE,
  session_data JSONB DEFAULT '{}',
  duration_minutes INTEGER,
  blocks_detected JSONB DEFAULT '[]',
  confidence_change DECIMAL(3,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_worlds_user_id ON worlds(user_id);
CREATE INDEX idx_world_entities_world_id ON world_entities(world_id);
CREATE INDEX idx_world_entities_vector_id ON world_entities(vector_id);
CREATE INDEX idx_entity_relationships_source ON entity_relationships(source_entity_id);
CREATE INDEX idx_entity_relationships_target ON entity_relationships(target_entity_id);
CREATE INDEX idx_ai_interactions_user_world ON ai_interactions(user_id, world_id);
CREATE INDEX idx_creative_sessions_user_id ON creative_sessions(user_id);
```

## Frontend Architecture

### Component Architecture

#### Component Organization
```
apps/web/src/
├── components/
│   ├── ui/                     # Radix UI primitives and base components
│   ├── ai/                     # AI assistant and conversation components
│   │   ├── ChatInterface.tsx
│   │   ├── ConfidenceMeter.tsx
│   │   └── BlockIntervention.tsx
│   ├── world/                  # World content management
│   │   ├── EntityEditor.tsx
│   │   ├── RelationshipGraph.tsx
│   │   └── WorldExplorer.tsx
│   ├── dashboard/              # Main creative dashboard
│   │   ├── CreativeDashboard.tsx
│   │   ├── ProgressTracker.tsx
│   │   └── QuickActions.tsx
│   └── shared/                 # Shared components across features
├── lib/                        # Utility functions and configurations
├── hooks/                      # Custom React hooks for AI and state
├── stores/                     # Zustand stores for client state
├── styles/                     # Global styles and Tailwind config
└── types/                      # Frontend-specific TypeScript types
```

#### Component Template
```typescript
// Example: AI Chat Interface Component
import { useState } from 'react';
import { api } from '@/lib/api';
import { useWorldStore } from '@/stores/world-store';
import { cn } from '@/lib/utils';

interface ChatInterfaceProps {
  worldId?: string;
  className?: string;
  onConfidenceChange?: (score: number) => void;
}

export function ChatInterface({ 
  worldId, 
  className, 
  onConfidenceChange 
}: ChatInterfaceProps) {
  const [message, setMessage] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const { currentWorld } = useWorldStore();
  
  const chatMutation = api.ai.chat.useMutation({
    onSuccess: (response) => {
      onConfidenceChange?.(response.confidenceImpact);
    },
  });

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsStreaming(true);
    try {
      await chatMutation.mutateAsync({
        message,
        worldId: worldId || currentWorld?.id,
        context: {
          currentEntities: currentWorld?.entities.map(e => e.id) || [],
        }
      });
    } finally {
      setIsStreaming(false);
      setMessage('');
    }
  };

  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>
      {/* Chat history */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Chat messages */}
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask your AI assistant about your world..."
            className="flex-1 px-3 py-2 border rounded-md"
            disabled={isStreaming}
          />
          <button
            onClick={handleSendMessage}
            disabled={isStreaming || !message.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            {isStreaming ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

### State Management Architecture

#### State Structure
```typescript
// Zustand stores for client-side state management

// World store for current creative session
interface WorldStore {
  currentWorld: World | null;
  entities: WorldEntity[];
  relationships: EntityRelationship[];
  confidenceScore: number;
  isLoading: boolean;
  
  // Actions
  setCurrentWorld: (world: World) => void;
  addEntity: (entity: WorldEntity) => void;
  updateEntity: (id: string, updates: Partial<WorldEntity>) => void;
  updateConfidence: (score: number) => void;
}

// AI assistant store for conversation state
interface AIStore {
  isTyping: boolean;
  conversationHistory: AIMessage[];
  currentContext: AIContext;
  detectedBlocks: CreativeBlock[];
  
  // Actions
  addMessage: (message: AIMessage) => void;
  setTyping: (typing: boolean) => void;
  updateContext: (context: Partial<AIContext>) => void;
  addDetectedBlock: (block: CreativeBlock) => void;
}

// UI store for interface state
interface UIStore {
  sidebarOpen: boolean;
  activePanel: 'chat' | 'explorer' | 'assessment';
  confidenceMeterVisible: boolean;
  
  // Actions
  toggleSidebar: () => void;
  setActivePanel: (panel: string) => void;
  toggleConfidenceMeter: () => void;
}
```

#### State Management Patterns
- **Optimistic Updates:** Frontend updates immediately with server reconciliation
- **Real-time Sync:** WebSocket updates for collaborative features and AI responses  
- **Persistent State:** Critical creative session state persisted in localStorage
- **Cache Integration:** Zustand integrated with tRPC query cache for consistency

### Routing Architecture

#### Route Organization
```
apps/web/app/
├── (dashboard)/               # Dashboard layout group
│   ├── dashboard/             # Main creative dashboard
│   ├── worlds/                # World management
│   │   ├── [id]/             # Individual world view
│   │   │   ├── page.tsx      # World explorer
│   │   │   ├── brainstorm/   # AI brainstorming studio
│   │   │   └── assess/       # Story readiness assessment
│   │   └── new/              # Create new world
│   └── settings/             # User preferences
├── (auth)/                    # Authentication layout
│   ├── login/
│   ├── register/
│   └── callback/             # Auth0 callback
├── api/                       # API routes for tRPC
│   └── trpc/
│       └── [trpc]/
│           └── route.ts
└── globals.css               # Global styles
```

#### Protected Route Pattern
```typescript
// middleware.ts - Route protection with Auth0
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/worlds/:path*',
    '/api/trpc/:path*'
  ]
};

// Protected layout component
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorBoundary error={error} />;
  if (!user) redirect('/login');
  
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
```

### Frontend Services Layer

#### API Client Setup
```typescript
// lib/api.ts - tRPC client configuration
import { createTRPCNext } from '@trpc/next';
import { httpBatchLink, loggerLink } from '@trpc/client';
import type { AppRouter } from '@/server/api/root';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            return {
              authorization: `Bearer ${getAccessToken()}`,
            };
          },
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
          },
        },
      },
    };
  },
  ssr: false,
});
```

#### Service Example
```typescript
// hooks/useAIAssistant.ts - AI service integration
import { useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { useWorldStore } from '@/stores/world-store';

export function useAIAssistant(worldId?: string) {
  const [isStreaming, setIsStreaming] = useState(false);
  const { currentWorld, updateConfidence } = useWorldStore();
  
  const chatMutation = api.ai.chat.useMutation({
    onSuccess: (response) => {
      updateConfidence(response.confidenceImpact);
    },
  });
  
  const sendMessage = useCallback(async (message: string) => {
    setIsStreaming(true);
    try {
      const response = await chatMutation.mutateAsync({
        message,
        worldId: worldId || currentWorld?.id,
        context: {
          currentEntities: currentWorld?.entities.map(e => e.id) || [],
          sessionDuration: Date.now() - sessionStart,
          confidenceScore: currentWorld?.confidenceScore || 0,
        }
      });
      return response;
    } finally {
      setIsStreaming(false);
    }
  }, [worldId, currentWorld, chatMutation]);
  
  const assessStoryReadiness = api.ai.assessStoryReadiness.useQuery(
    { worldId: worldId || currentWorld?.id! },
    { enabled: !!worldId || !!currentWorld?.id }
  );
  
  return {
    sendMessage,
    isStreaming,
    storyReadiness: assessStoryReadiness.data,
    isAssessing: assessStoryReadiness.isLoading,
  };
}
```

## Backend Architecture

### Service Architecture

#### RAG Pipeline Implementation
```typescript
// services/ai-service.ts - Core RAG implementation
export class AIService {
  private openai: OpenAI;
  private vectorService: VectorService;
  private redis: Redis;
  
  constructor() {
    this.openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
    this.vectorService = new VectorService();
    this.redis = new Redis(env.REDIS_URL);
  }
  
  async generateResponse(context: AIContext, userMessage: string): Promise<AIResponse> {
    // Step 1: Retrieve relevant context using vector search
    const relevantEntities = await this.vectorService.searchSimilar(
      userMessage,
      context.worldId,
      { limit: 5, threshold: 0.7 }
    );
    
    // Step 2: Build context for LLM
    const systemPrompt = this.buildSystemPrompt(context, relevantEntities);
    const contextualPrompt = this.buildContextualPrompt(userMessage, relevantEntities);
    
    // Step 3: Generate response with OpenAI
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: contextualPrompt }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });
    
    // Step 4: Analyze confidence impact
    const confidenceImpact = await this.analyzeConfidenceImpact(
      userMessage,
      response.choices[0]?.message.content || '',
      context
    );
    
    return {
      message: response.choices[0]?.message.content || '',
      confidenceImpact,
      relevantEntities,
      suggestions: await this.generateFollowUpSuggestions(context),
    };
  }
  
  private buildSystemPrompt(context: AIContext, entities: WorldEntity[]): string {
    return `You are a supportive AI worldbuilding assistant focused on building creative confidence.
    
User Type: ${context.userType}
Current Confidence: ${context.confidenceScore}/10
World Context: ${entities.map(e => `${e.name}: ${e.content.slice(0, 100)}`).join('\n')}

Your role is to:
1. Provide encouraging, specific feedback
2. Help identify story opportunities in their world
3. Gently guide toward story creation when appropriate
4. Never overwhelm with too many suggestions
5. Celebrate creative achievements and progress

Respond in a warm, encouraging tone that builds confidence rather than pointing out flaws.`;
  }
  
  async detectCreativeBlocks(sessionData: SessionData): Promise<BlockAnalysis> {
    const patterns = {
      worldbuildersDisease: this.detectEndlessWorldbuilding(sessionData),
      analysisParalysis: this.detectDecisionParalysis(sessionData),
      perfectionismLoop: this.detectPerfectionismLoop(sessionData),
      scopeCreep: this.detectScopeCreep(sessionData),
    };
    
    const detectedBlocks = Object.entries(patterns)
      .filter(([_, detected]) => detected)
      .map(([blockType]) => blockType);
    
    if (detectedBlocks.length > 0) {
      const interventions = await this.generateInterventions(detectedBlocks, sessionData);
      return { blocks: detectedBlocks, interventions, severity: 'medium' };
    }
    
    return { blocks: [], interventions: [], severity: 'none' };
  }
  
  private detectEndlessWorldbuilding(sessionData: SessionData): boolean {
    const { duration, entitiesCreated, storyProgress } = sessionData;
    return duration > 120 && entitiesCreated > 10 && storyProgress === 0;
  }
}
```

#### Vector Service Implementation
```typescript
// services/vector-service.ts - Pinecone integration
export class VectorService {
  private pinecone: Pinecone;
  private index: Index;
  private openai: OpenAI;
  
  constructor() {
    this.pinecone = new Pinecone({ apiKey: env.PINECONE_API_KEY });
    this.index = this.pinecone.index(env.PINECONE_INDEX_NAME);
    this.openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
  }
  
  async createEmbedding(content: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: content,
    });
    
    return response.data[0]?.embedding || [];
  }
  
  async upsertEntity(entity: WorldEntity): Promise<void> {
    const embedding = await this.createEmbedding(
      `${entity.name}: ${entity.content}`
    );
    
    await this.index.upsert([{
      id: entity.vectorId,
      values: embedding,
      metadata: {
        entityId: entity.id,
        worldId: entity.worldId,
        type: entity.type,
        name: entity.name,
        content: entity.content.slice(0, 1000), // Truncate for metadata
      }
    }]);
  }
  
  async searchSimilar(
    query: string,
    worldId: string,
    options: { limit?: number; threshold?: number } = {}
  ): Promise<SearchResult[]> {
    const { limit = 5, threshold = 0.7 } = options;
    
    // Create embedding for search query
    const queryEmbedding = await this.createEmbedding(query);
    
    // Search in Pinecone with world filter
    const searchResults = await this.index.query({
      vector: queryEmbedding,
      topK: limit,
      filter: { worldId },
      includeMetadata: true,
    });
    
    return searchResults.matches
      ?.filter(match => (match.score || 0) >= threshold)
      .map(match => ({
        entityId: match.metadata?.entityId as string,
        score: match.score || 0,
        content: match.metadata?.content as string,
        name: match.metadata?.name as string,
      })) || [];
  }
  
  async discoverRelationships(worldId: string): Promise<RelationshipSuggestion[]> {
    // Get all entities for the world
    const worldEntities = await this.getAllWorldEntities(worldId);
    const suggestions: RelationshipSuggestion[] = [];
    
    for (const entity of worldEntities) {
      const similar = await this.searchSimilar(
        entity.content,
        worldId,
        { limit: 3, threshold: 0.8 }
      );
      
      for (const match of similar) {
        if (match.entityId !== entity.id) {
          suggestions.push({
            sourceId: entity.id,
            targetId: match.entityId,
            type: this.inferRelationshipType(entity, match),
            confidence: match.score,
            reasoning: await this.generateRelationshipReasoning(entity, match),
          });
        }
      }
    }
    
    return suggestions.sort((a, b) => b.confidence - a.confidence);
  }
}
```

### Database Architecture

#### Repository Pattern Implementation
```typescript
// repositories/world-repository.ts
export class WorldRepository {
  private db: PrismaClient;
  
  constructor() {
    this.db = new PrismaClient();
  }
  
  async createWorld(userId: string, data: CreateWorldInput): Promise<World> {
    return await this.db.world.create({
      data: {
        userId,
        name: data.name,
        description: data.description,
        confidenceScore: 0.0,
        storyReadiness: {},
      },
      include: {
        entities: true,
      },
    });
  }
  
  async getWorldWithRelationships(worldId: string): Promise<WorldWithRelationships | null> {
    return await this.db.world.findUnique({
      where: { id: worldId },
      include: {
        entities: {
          include: {
            sourceRelationships: {
              include: { targetEntity: true }
            },
            targetRelationships: {
              include: { sourceEntity: true }
            },
          },
        },
        aiInteractions: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
  }
  
  async updateConfidenceScore(worldId: string, score: number): Promise<void> {
    await this.db.world.update({
      where: { id: worldId },
      data: { 
        confidenceScore: score,
        lastAnalyzed: new Date(),
      },
    });
  }
}

// repositories/entity-repository.ts
export class EntityRepository {
  private db: PrismaClient;
  private vectorService: VectorService;
  
  constructor() {
    this.db = new PrismaClient();
    this.vectorService = new VectorService();
  }
  
  async createEntity(data: CreateEntityInput): Promise<WorldEntity> {
    const vectorId = `entity_${generateId()}`;
    
    const entity = await this.db.worldEntity.create({
      data: {
        ...data,
        vectorId,
      },
    });
    
    // Create vector embedding asynchronously
    await this.vectorService.upsertEntity(entity);
    
    return entity;
  }
  
  async updateEntity(entityId: string, updates: UpdateEntityInput): Promise<WorldEntity> {
    const entity = await this.db.worldEntity.update({
      where: { id: entityId },
      data: updates,
    });
    
    // Update vector embedding if content changed
    if (updates.content) {
      await this.vectorService.upsertEntity(entity);
    }
    
    return entity;
  }
}
```

### Authentication and Authorization

#### Auth0 Integration
```typescript
// lib/auth.ts - Auth0 server-side configuration
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  secret: env.AUTH0_SECRET,
  issuerBaseURL: env.AUTH0_ISSUER_BASE_URL,
  baseURL: env.AUTH0_BASE_URL,
  clientID: env.AUTH0_CLIENT_ID,
  clientSecret: env.AUTH0_CLIENT_SECRET,
  authorizationParams: {
    scope: 'openid profile email',
  },
  session: {
    rollingDuration: 24 * 60 * 60, // 24 hours
    absoluteDuration: 7 * 24 * 60 * 60, // 7 days
  },
});

// middleware/auth-middleware.ts - tRPC auth middleware
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  const session = await getSession(req, res);
  
  return {
    session,
    db: new PrismaClient(),
    user: session?.user,
  };
};

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  
  return next({
    ctx: {
      ...ctx,
      user: ctx.session.user,
    },
  });
});
```

## Unified Project Structure

```
ai-worldbuilding-assistant/
├── .github/                    # CI/CD workflows
│   └── workflows/
│       ├── ci.yaml
│       └── deploy.yaml
├── apps/                       # Application packages
│   ├── web/                    # Next.js frontend application
│   │   ├── src/
│   │   │   ├── components/     # React components organized by feature
│   │   │   │   ├── ai/         # AI assistant components
│   │   │   │   ├── world/      # World management components
│   │   │   │   ├── dashboard/  # Dashboard components
│   │   │   │   └── ui/         # Base UI components (Radix)
│   │   │   ├── app/            # Next.js App Router pages
│   │   │   │   ├── (dashboard)/
│   │   │   │   ├── (auth)/
│   │   │   │   └── api/
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   ├── stores/         # Zustand stores
│   │   │   ├── lib/            # Utility functions
│   │   │   └── styles/         # Global styles and Tailwind
│   │   ├── public/             # Static assets
│   │   ├── tests/              # Frontend tests (Vitest)
│   │   └── package.json
│   └── api/                    # Backend tRPC API
│       ├── src/
│       │   ├── server/         # tRPC server setup
│       │   │   ├── api/        # tRPC routers
│       │   │   │   ├── ai.ts   # AI assistant router
│       │   │   │   ├── world.ts # World management router
│       │   │   │   └── vector.ts # Vector operations router
│       │   │   └── db.ts       # Database client
│       │   ├── services/       # Business logic services
│       │   │   ├── ai-service.ts
│       │   │   ├── vector-service.ts
│       │   │   └── world-service.ts
│       │   ├── repositories/   # Data access layer
│       │   ├── middleware/     # Express/API middleware
│       │   └── utils/          # Backend utilities
│       ├── prisma/             # Database schema and migrations
│       ├── tests/              # Backend tests (Jest)
│       └── package.json
├── packages/                   # Shared packages
│   ├── shared/                 # Shared types and utilities
│   │   ├── src/
│   │   │   ├── types/          # TypeScript interfaces
│   │   │   │   ├── world.ts    # World and entity types
│   │   │   │   ├── ai.ts       # AI service types
│   │   │   │   └── user.ts     # User and auth types
│   │   │   ├── constants/      # Shared constants
│   │   │   └── utils/          # Shared utilities
│   │   └── package.json
│   ├── ui/                     # Shared UI components (if needed)
│   └── config/                 # Shared configuration
│       ├── eslint/
│       ├── typescript/
│       └── tailwind/
├── infrastructure/             # AWS CDK infrastructure
│   ├── lib/
│   │   ├── vector-stack.ts     # Pinecone and vector resources
│   │   ├── cache-stack.ts      # Redis cache infrastructure
│   │   └── monitoring-stack.ts # Sentry and analytics
│   └── bin/
├── scripts/                    # Build and deployment scripts
├── docs/                       # Project documentation
│   ├── prd.md
│   ├── front-end-spec.md
│   └── fullstack-architecture.md
├── .env.example                # Environment template
├── package.json                # Root package.json with workspaces
├── turbo.json                  # Turborepo configuration
└── README.md
```

## Development Workflow

### Local Development Setup

#### Prerequisites
```bash
# Install Node.js 18+ and pnpm
node --version  # Should be 18+
pnpm --version  # Should be 8+

# Install Docker for local Redis and PostgreSQL
docker --version
```

#### Initial Setup
```bash
# Clone and install dependencies
git clone <repository>
cd ai-worldbuilding-assistant
pnpm install

# Setup environment variables
cp .env.example .env.local
# Fill in required API keys:
# - OPENAI_API_KEY
# - PINECONE_API_KEY
# - AUTH0_SECRET, AUTH0_CLIENT_ID, etc.
# - DATABASE_URL
# - REDIS_URL

# Start local services
docker-compose up -d  # PostgreSQL and Redis

# Setup database
cd apps/api
pnpm db:migrate
pnpm db:seed

# Return to root and start development
cd ../..
pnpm dev
```

#### Development Commands
```bash
# Start all services in development mode
pnpm dev

# Start frontend only
pnpm dev:web

# Start backend only  
pnpm dev:api

# Run tests
pnpm test           # All tests
pnpm test:web       # Frontend tests
pnpm test:api       # Backend tests
pnpm test:e2e       # End-to-end tests

# Database operations
pnpm db:migrate     # Run migrations
pnpm db:reset       # Reset database
pnpm db:seed        # Seed test data
pnpm db:studio      # Open Prisma Studio
```

### Environment Configuration

#### Required Environment Variables
```bash
# Frontend (.env.local)
NEXT_PUBLIC_AUTH0_DOMAIN=your-auth0-domain.auth0.com
NEXT_PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id
NEXT_PUBLIC_API_URL=http://localhost:3000

# Backend (.env)
DATABASE_URL=postgresql://user:password@localhost:5432/worldbuilding
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=sk-your-openai-api-key
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_INDEX_NAME=worldbuilding-vectors
PINECONE_ENVIRONMENT=us-east-1

# Shared
AUTH0_SECRET=your-long-random-string
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_BASE_URL=http://localhost:3000
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret

# Production only
SENTRY_DSN=your-sentry-dsn
VERCEL_PROJECT_ID=your-vercel-project-id
```

## Deployment Architecture

### Deployment Strategy

**Frontend Deployment:**
- **Platform:** Vercel with automatic deployments from main branch
- **Build Command:** `turbo build --filter=web`
- **Output Directory:** `apps/web/.next`
- **CDN/Edge:** Vercel Edge Network with global distribution

**Backend Deployment:**
- **Platform:** AWS Lambda via Serverless Framework
- **Build Command:** `turbo build --filter=api`
- **Deployment Method:** Serverless deployment with API Gateway integration

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm build
  
  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
  
  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install --frozen-lockfile
      - run: cd apps/api && pnpm deploy
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### Environments

| Environment | Frontend URL | Backend URL | Purpose |
|-------------|-------------|-------------|---------|
| Development | http://localhost:3000 | http://localhost:3001 | Local development |
| Staging | https://staging.worldbuilding-ai.com | https://api-staging.worldbuilding-ai.com | Pre-production testing |
| Production | https://worldbuilding-ai.com | https://api.worldbuilding-ai.com | Live environment |

## Security and Performance

### Security Requirements

**Frontend Security:**
- CSP Headers: `script-src 'self' 'unsafe-inline' *.auth0.com *.vercel.app; object-src 'none';`
- XSS Prevention: Input sanitization and React's built-in XSS protection
- Secure Storage: Auth tokens in httpOnly cookies, sensitive data never in localStorage

**Backend Security:**
- Input Validation: Zod schemas for all tRPC inputs with strict validation
- Rate Limiting: 100 requests per minute per user, 1000 per hour for AI endpoints
- CORS Policy: Restricted to frontend domains only with credentials support

**Authentication Security:**
- Token Storage: Auth0 JWT tokens in secure httpOnly cookies
- Session Management: Rolling sessions with 24-hour duration, 7-day absolute limit
- Password Policy: Handled by Auth0 with strong password requirements

### Performance Optimization

**Frontend Performance:**
- Bundle Size Target: <100KB initial bundle, code splitting for AI features
- Loading Strategy: Lazy loading for AI components, progressive enhancement
- Caching Strategy: React Query cache for API responses, service worker for assets

**Backend Performance:**
- Response Time Target: <2 seconds for AI responses, <500ms for vector queries
- Database Optimization: Connection pooling, query optimization, strategic indexing
- Caching Strategy: Redis for AI responses (5min TTL), vector query results (1min TTL)

## Testing Strategy

### Testing Pyramid
```
           E2E Tests (Playwright)
          /                    \
     Integration Tests (Jest)
    /                          \
Frontend Unit (Vitest)    Backend Unit (Jest)
```

### Test Organization

#### Frontend Tests
```
apps/web/tests/
├── components/            # Component tests
│   ├── ai/
│   │   ├── ChatInterface.test.tsx
│   │   └── ConfidenceMeter.test.tsx
│   └── world/
│       └── RelationshipGraph.test.tsx
├── hooks/                 # Custom hook tests
├── stores/                # State management tests
└── utils/                 # Utility function tests
```

#### Backend Tests
```
apps/api/tests/
├── services/              # Service layer tests
│   ├── ai-service.test.ts
│   ├── vector-service.test.ts
│   └── world-service.test.ts
├── repositories/          # Data layer tests
├── api/                   # tRPC router tests
└── integration/           # Integration tests
```

#### E2E Tests
```
tests/e2e/
├── auth/                  # Authentication flows
├── worldbuilding/         # Core creative workflows
│   ├── create-world.spec.ts
│   ├── ai-conversation.spec.ts
│   └── confidence-building.spec.ts
└── performance/           # Performance regression tests
```

### Test Examples

#### Frontend Component Test
```typescript
// apps/web/tests/components/ai/ChatInterface.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChatInterface } from '@/components/ai/ChatInterface';
import { mockTRPCClient } from '../test-utils';

describe('ChatInterface', () => {
  it('sends message and displays AI response', async () => {
    const mockChatResponse = {
      message: 'Great character development!',
      confidenceImpact: 0.2,
    };
    
    const mockChat = jest.fn().mockResolvedValue(mockChatResponse);
    mockTRPCClient.ai.chat.useMutation.mockReturnValue({
      mutateAsync: mockChat,
      isLoading: false,
    });
    
    render(<ChatInterface worldId="test-world" />);
    
    const input = screen.getByPlaceholderText(/ask your ai assistant/i);
    const sendButton = screen.getByRole('button', { name: /send/i });
    
    fireEvent.change(input, { target: { value: 'Tell me about my character' } });
    fireEvent.click(sendButton);
    
    await waitFor(() => {
      expect(mockChat).toHaveBeenCalledWith({
        message: 'Tell me about my character',
        worldId: 'test-world',
        context: expect.any(Object),
      });
    });
    
    expect(screen.getByText('Great character development!')).toBeInTheDocument();
  });
});
```

#### Backend API Test
```typescript
// apps/api/tests/api/ai.test.ts
import { appRouter } from '@/server/api/root';
import { createTRPCMsw } from 'msw-trpc';
import { AIService } from '@/services/ai-service';

describe('AI Router', () => {
  const mockAIService = {
    generateResponse: jest.fn(),
    detectCreativeBlocks: jest.fn(),
  } as jest.Mocked<AIService>;
  
  it('generates AI response with confidence impact', async () => {
    const mockResponse = {
      message: 'Your world has great potential for epic fantasy stories!',
      confidenceImpact: 0.3,
      suggestions: ['Develop the magic system', 'Add character conflicts'],
    };
    
    mockAIService.generateResponse.mockResolvedValue(mockResponse);
    
    const caller = appRouter.createCaller({
      user: { id: 'test-user' },
      db: mockDb,
      aiService: mockAIService,
    });
    
    const result = await caller.ai.chat({
      message: 'What story could I write with this world?',
      worldId: 'test-world',
      context: { confidenceScore: 0.5 },
    });
    
    expect(result.message).toBe(mockResponse.message);
    expect(result.confidenceImpact).toBe(0.3);
    expect(mockAIService.generateResponse).toHaveBeenCalledWith(
      expect.objectContaining({ confidenceScore: 0.5 }),
      'What story could I write with this world?'
    );
  });
});
```

#### E2E Test
```typescript
// tests/e2e/worldbuilding/ai-conversation.spec.ts
import { test, expect } from '@playwright/test';

test('AI assistant builds user confidence through conversation', async ({ page }) => {
  await page.goto('/dashboard');
  
  // Create a new world
  await page.click('[data-testid="create-world"]');
  await page.fill('[data-testid="world-name"]', 'Epic Fantasy Realm');
  await page.click('[data-testid="save-world"]');
  
  // Add a character
  await page.click('[data-testid="add-character"]');
  await page.fill('[data-testid="character-name"]', 'Elara the Wise');
  await page.fill('[data-testid="character-content"]', 'A powerful mage with a mysterious past');
  await page.click('[data-testid="save-character"]');
  
  // Interact with AI assistant
  await page.fill('[data-testid="ai-message-input"]', 'What story potential do you see in my world?');
  await page.click('[data-testid="send-ai-message"]');
  
  // Wait for AI response
  await expect(page.locator('[data-testid="ai-response"]')).toBeVisible({ timeout: 5000 });
  
  // Check confidence meter increased
  const confidenceMeter = page.locator('[data-testid="confidence-meter"]');
  await expect(confidenceMeter).toHaveAttribute('data-score', /[0-9]\.[1-9]/); // Should be > 0
  
  // Verify encouraging response
  const aiResponse = await page.locator('[data-testid="ai-response"]').textContent();
  expect(aiResponse).toMatch(/(great|potential|story|character)/i);
});

test('Block detection and intervention workflow', async ({ page }) => {
  await page.goto('/worlds/test-world');
  
  // Simulate endless worldbuilding behavior
  for (let i = 0; i < 5; i++) {
    await page.click('[data-testid="add-location"]');
    await page.fill('[data-testid="location-name"]', `Location ${i}`);
    await page.fill('[data-testid="location-content"]', 'Detailed description...');
    await page.click('[data-testid="save-location"]');
    await page.waitForTimeout(1000);
  }
  
  // Should trigger block detection
  await expect(page.locator('[data-testid="block-intervention"]')).toBeVisible({ timeout: 10000 });
  
  // Click on intervention suggestion
  await page.click('[data-testid="story-transition-suggestion"]');
  
  // Should navigate to story readiness assessment
  await expect(page).toHaveURL(/.*\/assess/);
  await expect(page.locator('[data-testid="story-readiness-score"]')).toBeVisible();
});
## Coding Standards

### Critical Fullstack Rules

- **Type Safety First:** All data flowing between frontend and backend must use shared TypeScript interfaces from packages/shared
- **AI Cost Management:** Always cache AI responses in Redis with appropriate TTL, never make duplicate API calls for same context
- **Vector Database Sync:** Entity updates must trigger vector embedding refresh asynchronously to maintain search accuracy
- **Error Boundary Protection:** All AI interactions must be wrapped in error boundaries with graceful fallback to offline mode
- **Confidence Impact Tracking:** Every AI interaction must include confidenceImpact calculation and user state update
- **RAG Context Limits:** Vector search results limited to 5 entities max to prevent context window overflow
- **Real-time State Sync:** WebSocket connections required for collaborative features and AI response streaming
- **Performance Monitoring:** All AI service calls must include timing metrics for response time optimization

### Naming Conventions

| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| Components | PascalCase | - | `ChatInterface.tsx` |
| Hooks | camelCase with 'use' | - | `useAIAssistant.ts` |
| API Routes | - | camelCase with type | `ai.chat.useMutation()` |
| Database Tables | - | snake_case | `world_entities` |
| Vector IDs | - | underscore prefix | `entity_abc123` |
| AI Contexts | - | camelCase | `confidenceScore` |

## Error Handling Strategy

### Error Flow

```mermaid
sequenceDiagram
    participant F as Frontend
    participant API as tRPC API
    participant AI as AI Service
    participant V as Vector DB
    participant DB as Database
    
    F->>API: User action (create entity)
    API->>DB: Save entity
    DB-->>API: Success/Error
    
    alt Database Error
        API-->>F: Database error response
        F->>F: Show retry option
    else Success
        API->>V: Create vector embedding
        V-->>API: Vector success/error
        
        alt Vector Error
            API->>API: Log vector failure
            API-->>F: Success with warning
            F->>F: Show "search may be limited"
        else Vector Success
            API->>AI: Analyze confidence impact
            AI-->>API: Confidence update
            API-->>F: Complete success
        end
    end
```

### Error Response Format

```typescript
interface APIError {
  error: {
    code: 'VECTOR_SERVICE_ERROR' | 'AI_SERVICE_ERROR' | 'DATABASE_ERROR' | 'VALIDATION_ERROR';
    message: string;
    details?: {
      vectorServiceDown?: boolean;
      aiQuotaExceeded?: boolean;
      retryAfter?: number;
      fallbackMode?: boolean;
    };
    timestamp: string;
    requestId: string;
  };
}
```

### Frontend Error Handling

```typescript
// Error boundary for AI features
export function AIErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
          <h3 className="text-amber-800 font-medium">AI Assistant Temporarily Unavailable</h3>
          <p className="text-amber-700 text-sm mt-1">
            You can continue worldbuilding without AI assistance. Your work is automatically saved.
          </p>
          <button
            onClick={resetErrorBoundary}
            className="mt-2 px-3 py-1 bg-amber-100 text-amber-800 rounded text-sm"
          >
            Try Again
          </button>
        </div>
      )}
      onError={(error) => {
        console.error('AI Error:', error);
        // Report to Sentry but don't block user workflow
        Sentry.captureException(error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// Service-specific error handling
export function useAIWithFallback() {
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  
  const aiChat = api.ai.chat.useMutation({
    onError: (error) => {
      if (error.data?.code === 'AI_SERVICE_ERROR') {
        setIsOfflineMode(true);
        toast.warning('AI assistant offline. Your work continues to be saved.');
      }
    },
  });
  
  return {
    sendMessage: aiChat.mutateAsync,
    isOfflineMode,
    retry: () => {
      setIsOfflineMode(false);
      aiChat.reset();
    }
  };
}
```

### Backend Error Handling

```typescript
// Global error handler for tRPC
export const errorFormatter: TRPCErrorFormatter = ({ shape, error }) => {
  return {
    ...shape,
    data: {
      ...shape.data,
      requestId: generateRequestId(),
      timestamp: new Date().toISOString(),
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    },
  };
};

// AI Service error handling with circuit breaker
export class AIService {
  private circuitBreaker = new CircuitBreaker(this.callOpenAI.bind(this), {
    timeout: 5000,
    errorThresholdPercentage: 50,
    resetTimeout: 30000,
  });
  
  async generateResponse(context: AIContext, message: string): Promise<AIResponse> {
    try {
      const response = await this.circuitBreaker.fire(context, message);
      return response;
    } catch (error) {
      if (error instanceof OpenAIError) {
        if (error.status === 429) {
          throw new TRPCError({
            code: 'TOO_MANY_REQUESTS',
            message: 'AI quota exceeded',
            cause: error,
          });
        }
      }
      
      // Log error but provide graceful degradation
      logger.error('AI service error', { error, context });
      
      return {
        message: "I'm having trouble right now, but your world looks great! Keep building.",
        confidenceImpact: 0.1, // Small positive impact
        fallbackMode: true,
      };
    }
  }
}
```

## Monitoring and Observability

### Monitoring Stack

- **Frontend Monitoring:** Sentry for error tracking, Vercel Analytics for performance
- **Backend Monitoring:** Sentry for error tracking, CloudWatch for AWS Lambda metrics
- **Error Tracking:** Comprehensive error tracking with user context and creative session data
- **Performance Monitoring:** Real-time monitoring of AI response times and vector query performance

### Key Metrics

**Frontend Metrics:**
- Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- JavaScript errors with creative session context
- AI interaction response times and success rates
- User confidence score improvements over time

**Backend Metrics:**
- AI service response times (target <2s)
- Vector database query performance (target <500ms)
- Database query performance and connection pool usage
- Error rates by service with automatic alerting

**Business Metrics:**
- Creative block detection accuracy and intervention success
- Story transition rate improvements
- User confidence score distributions
- Session completion rates and creative momentum tracking

### Alerting Configuration

```typescript
// Monitoring service for key metrics
export class MonitoringService {
  private sentry: Sentry;
  private cloudWatch: CloudWatch;
  
  async trackAIResponse(duration: number, success: boolean, userId: string) {
    // Performance tracking
    if (duration > 5000) {
      this.sentry.captureMessage('Slow AI response', {
        level: 'warning',
        extra: { duration, userId },
      });
    }
    
    // Business metrics
    await this.cloudWatch.putMetric({
      Namespace: 'WorldbuildingAI',
      MetricData: [{
        MetricName: 'AIResponseTime',
        Value: duration,
        Unit: 'Milliseconds',
        Dimensions: [
          { Name: 'Success', Value: success.toString() }
        ]
      }]
    });
  }
  
  async trackConfidenceChange(before: number, after: number, userId: string) {
    const improvement = after - before;
    
    if (improvement < -0.5) {
      // Significant confidence drop - investigate
      this.sentry.captureMessage('Confidence drop detected', {
        level: 'warning',
        user: { id: userId },
        extra: { before, after, improvement },
      });
    }
    
    // Track overall confidence trends
    await this.cloudWatch.putMetric({
      Namespace: 'WorldbuildingAI',
      MetricData: [{
        MetricName: 'ConfidenceImprovement',
        Value: improvement,
        Unit: 'Count',
      }]
    });
  }
}
```

## Checklist Results Report

*[To be completed after running architect-checklist]*

## Next Steps

### Architecture Review and Validation

The fullstack architecture is now complete and ready for validation. Key areas for review:

1. **RAG Pipeline Implementation:** Verify the vector database integration approach and AI service architecture meets performance requirements
2. **Cost Optimization:** Review AI token usage patterns and caching strategies for sustainable economics
3. **Scalability Planning:** Validate the architecture can handle 10,000 concurrent users with current infrastructure choices
4. **Security Review:** Ensure authentication, authorization, and data protection measures are comprehensive

### Development Team Handoff

The architecture provides a complete technical foundation for the AI Worldbuilding Assistant. Development teams should:

1. **Frontend Team:** Use the component architecture and state management patterns for building the confidence-building user experience
2. **Backend Team:** Implement the RAG pipeline and vector database integration following the service layer architecture
3. **DevOps Team:** Set up the deployment pipeline and monitoring infrastructure as specified
4. **QA Team:** Follow the testing strategy for comprehensive coverage of AI workflows and creative confidence features

The architecture successfully addresses the core creative paralysis problem through AI-native design while maintaining the technical performance and cost requirements for a sustainable business model.