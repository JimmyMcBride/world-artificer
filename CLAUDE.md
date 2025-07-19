# World Artificer - Development Guide

> **AI-powered worldbuilding assistant** that solves creative paralysis for writers, game developers, and DMs.

## Quick Start

```bash
# Install dependencies and start development
pnpm install
pnpm --filter @world-artificer/database db:generate
pnpm dev

# Code quality checks
pnpm lint && pnpm type-check
```

**Ports**: Frontend (3001), Backend (3002), Database (5432)

## Documentation Structure

This development guide is organized into focused modules. Reference the appropriate file based on your current task:

### 🏗️ **Architecture & Setup**
- **[overview.md](./CLAUDE/overview.md)** - Project goals, roadmap, and current status
- **[architecture.md](./CLAUDE/architecture.md)** - System design, tech stack, component structure
- **[development.md](./CLAUDE/development.md)** - Commands, workflow, environment setup

### 💾 **Data & APIs**
- **[domain-models.md](./CLAUDE/domain-models.md)** - Core interfaces and data models
- **[database.md](./CLAUDE/database.md)** - Schema, Prisma patterns, query optimization
- **[api-guidelines.md](./CLAUDE/api-guidelines.md)** - tRPC patterns, error handling, forms

### 🎨 **Frontend Development**
- **[frontend-guidelines.md](./CLAUDE/frontend-guidelines.md)** - Components, styling, state management

### 🤖 **AI Integration**
- **[ai-integration.md](./CLAUDE/ai-integration.md)** - RAG pipeline, confidence system, vector DB

### 📐 **Standards & Quality**
- **[coding-standards.md](./CLAUDE/coding-standards.md)** - TypeScript config, imports, naming conventions
- **[testing.md](./CLAUDE/testing.md)** - Testing strategy, patterns, CI/CD
- **[performance.md](./CLAUDE/performance.md)** - Optimization, caching, cost management
- **[security.md](./CLAUDE/security.md)** - Auth, data protection, API security

### 🔧 **Support**
- **[troubleshooting.md](./CLAUDE/troubleshooting.md)** - Common issues, debugging, solutions

## AI Assistant Navigation Guide

When working with AI assistants, direct them to the appropriate documentation:

### 📋 **IMPORTANT: Always Commit Changes**
**After completing any todo list that results in codebase changes, ALWAYS commit your work:**

```bash
# 1. Check status and review changes
git status
git diff

# 2. Stage relevant files
git add <files>

# 3. Create descriptive commit with Claude attribution
git commit -m "$(cat <<'EOF'
Brief description of changes

Detailed explanation of what was changed and why.
List key modifications, new features, or fixes.

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Verify commit succeeded
git status
```

### For **Architecture Questions**
> "Review [architecture.md](./CLAUDE/architecture.md) for tech stack and system design"

### For **Database Work**
> "Check [database.md](./CLAUDE/database.md) for schema and [domain-models.md](./CLAUDE/domain-models.md) for interfaces"

### For **API Development**
> "Follow patterns in [api-guidelines.md](./CLAUDE/api-guidelines.md) and validate with [coding-standards.md](./CLAUDE/coding-standards.md)"

### For **Frontend Components**
> "Use [frontend-guidelines.md](./CLAUDE/frontend-guidelines.md) for component patterns and styling"

### For **AI Features**
> "Reference [ai-integration.md](./CLAUDE/ai-integration.md) for RAG pipeline and confidence systems"

### For **Performance Issues**
> "Check [performance.md](./CLAUDE/performance.md) for optimization strategies"

### For **Debugging**
> "Start with [troubleshooting.md](./CLAUDE/troubleshooting.md) for common solutions"

## Core Domain Overview

**World Artificer** uses a flexible entity system built on these key models:

- **World**: Top-level container with AI confidence scoring
- **WorldEntity**: Characters, locations, factions, events, concepts, items
- **EntityRelationship**: Connections between entities with AI discovery
- **WorldContent**: Notes, documents, braindumps with vector embeddings
- **ConfidenceAssessment**: AI-powered story readiness analysis

## Technology Stack

| **Frontend** | Next.js 14, Tailwind CSS, Zustand |
|--------------|-----------------------------------|
| **Backend** | Express + tRPC, Zod validation |
| **Database** | PostgreSQL + Prisma ORM |
| **AI Services** | OpenAI GPT-4, Pinecone vectors |
| **Development** | TypeScript, Turbo monorepo, pnpm |

## Development Principles

### 🎯 **Creative Confidence Focus**
Every feature should build user confidence and prevent creative blocks

### 🔒 **Type Safety First**
Strict TypeScript across all packages with runtime validation

### 🚀 **Performance Conscious**
Optimize for <500ms AI responses and efficient database queries

### 🛡️ **Security by Design**
Input validation, proper auth, and secure secret management

## Critical Commands

```bash
# Database operations
pnpm --filter @world-artificer/database db:generate  # After schema changes
pnpm --filter @world-artificer/database db:push     # Apply schema
pnpm --filter @world-artificer/database db:migrate  # Production migrations

# Development workflow
pnpm dev          # Start all services
pnpm build        # Build all packages
pnpm lint:fix     # Fix linting issues
pnpm type-check   # Validate TypeScript
```

## File Organization Patterns

```typescript
// Import order: external → internal packages → relative
import React from 'react';
import { api } from '@world-artificer/shared/api';
import { Button } from '../ui/Button';

// Component structure: types → implementation → export
interface Props { /* ... */ }
export function Component({ }: Props) { /* ... */ }
export default Component;
```

## Current Status

**✅ Epic 1 Complete**: Foundation with Next.js, tRPC, Prisma, and basic worldbuilding  
**🔄 Epic 2 In Progress**: AI integration with RAG pipeline and confidence assessment  
**📋 Epic 3 Planned**: Creative block detection and intervention  
**📋 Epic 4 Planned**: Performance optimization and advanced UX  

## Keeping Documentation Updated

### When to Update Documentation

1. **New features**: Update relevant domain files
2. **Architecture changes**: Update [architecture.md](./CLAUDE/architecture.md)
3. **New patterns**: Add to [coding-standards.md](./CLAUDE/coding-standards.md)
4. **Common issues**: Document in [troubleshooting.md](./CLAUDE/troubleshooting.md)

### How to Update

1. **Keep sections focused**: Each file should cover one domain area
2. **Cross-reference related files**: Link between documentation when helpful
3. **Update examples**: Ensure code examples reflect current patterns
4. **Maintain consistency**: Follow the same structure and tone across files

## Support Resources

- **External Docs**: [Next.js](https://nextjs.org/docs) | [tRPC](https://trpc.io/docs) | [Prisma](https://www.prisma.io/docs) | [Tailwind](https://tailwindcss.com/docs)
- **Project Docs**: [docs/](./docs/) | [Project Management](./project-management/) | [Research](./research/)
- **Environment**: `.env.example` for required variables

---

> 💡 **Tip**: This guide grows with the project. When you discover new patterns or solutions, document them in the appropriate module to help future development.