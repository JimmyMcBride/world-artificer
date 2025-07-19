# System Architecture

## Monorepo Structure
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

## Tech Stack

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

## Port Configuration
- **Frontend**: http://localhost:3001 (Next.js)
- **Backend**: http://localhost:3002 (Express/tRPC)
- **Database**: localhost:5432 (PostgreSQL)

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