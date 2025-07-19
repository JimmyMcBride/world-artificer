# World Artificer 🎭

> AI-powered worldbuilding assistant that builds creative confidence and prevents creative paralysis

World Artificer transforms the $1.7 billion worldbuilding market by solving the core creative paralysis problem that affects 42% of creators. Instead of focusing on time efficiency, this AI-native platform builds creative confidence, helping DMs, game developers, and writers finally transition from endless worldbuilding to actual story creation.

## 🎯 Primary Value Proposition

**"Finally break through worldbuilding paralysis and start your story with confidence"**

## 🏗️ Project Structure

```
world-artificer/
├── packages/
│   ├── frontend/          # Next.js 14 application
│   ├── backend/           # tRPC API server  
│   ├── shared/            # Shared types and utilities
│   └── database/          # Database schemas and migrations
├── docs/                  # Project documentation
├── project-management/    # Epics and user stories
└── research/             # Market research and insights
```

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (recommended package manager)
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/world-artificer.git
   cd world-artificer
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development servers**
   ```bash
   # Start all services
   pnpm dev
   
   # Or start individually
   pnpm --filter @world-artificer/frontend dev
   pnpm --filter @world-artificer/backend dev
   ```

5. **Open the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/health

## 📦 Available Scripts

### Root Level Commands

```bash
pnpm dev          # Start all development servers
pnpm build        # Build all packages  
pnpm start        # Start all production servers
pnpm lint         # Run ESLint on all packages
pnpm lint:fix     # Fix ESLint issues
pnpm type-check   # Run TypeScript type checking
pnpm test         # Run tests across all packages
pnpm clean        # Clean build artifacts
pnpm reset        # Full clean and reinstall
```

### Package-Specific Commands

```bash
# Frontend (Next.js)
pnpm --filter @world-artificer/frontend dev
pnpm --filter @world-artificer/frontend build
pnpm --filter @world-artificer/frontend start

# Backend (tRPC)
pnpm --filter @world-artificer/backend dev
pnpm --filter @world-artificer/backend build
pnpm --filter @world-artificer/backend start

# Shared utilities
pnpm --filter @world-artificer/shared build
pnpm --filter @world-artificer/shared dev
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: tRPC with React Query
- **UI Components**: Custom components with Headless UI

### Backend  
- **Framework**: Express.js with tRPC
- **Language**: TypeScript
- **Database**: PostgreSQL (Supabase)
- **Vector Database**: Pinecone
- **AI Integration**: OpenAI GPT-4 & Embeddings
- **Authentication**: NextAuth.js

### Infrastructure
- **Monorepo**: pnpm workspaces
- **Build Tool**: Turbo
- **Deployment**: Vercel (frontend) + AWS Lambda (backend)
- **Database Hosting**: Supabase
- **Vector Database**: Pinecone Cloud

## 📊 Project Status

**Current Phase**: Epic 1 - Core Platform Infrastructure ✅

### Development Roadmap

| Epic | Status | Timeline | Description |
|------|--------|----------|-------------|
| **Epic 1**: Core Platform Infrastructure | ✅ **Complete** | 2-3 weeks | Monorepo setup, authentication, databases, deployment |
| **Epic 2**: AI Creative Confidence Engine | 🔄 **Next** | 3-4 weeks | Vector database, AI analysis, story-readiness assessment |
| **Epic 3**: Guided Worldbuilding Assistant | 📋 **Planned** | 4-5 weeks | Content transformation, templates, search |
| **Epic 4**: Block Prevention System | 📋 **Planned** | 2-3 weeks | Paralysis detection, intervention, celebration |

**Total MVP Timeline**: 3-4 months

## 🎯 Key Features (Planned)

### ✨ AI Creative Confidence Engine
- Vector database storing world entities and relationships
- AI analysis of world content for gaps and story-readiness
- "Your world is ready for this type of story" assessments
- Real-time confidence scoring and progress tracking

### 🧠 Guided Worldbuilding Assistant  
- Brain dump to structured world transformation
- Contextual question generation based on world gaps
- Smart templates with AI guidance
- Semantic search across all world content

### 🚨 Block Prevention System
- Pattern recognition for creative paralysis
- Gentle intervention before blocks become severe
- Story transition prompts when world is ready
- Progress celebration and milestone tracking

## 🔧 Development

### Code Style & Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic code formatting
- **Import Organization**: Automatic import sorting
- **Path Mapping**: Clean imports with @ aliases

### Testing Strategy

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @world-artificer/frontend test
pnpm --filter @world-artificer/backend test
```

### Database Management

```bash
# Generate Prisma client
pnpm --filter @world-artificer/database generate

# Run migrations
pnpm --filter @world-artificer/database migrate

# Reset database
pnpm --filter @world-artificer/database reset
```

## 🌍 Environment Configuration

Required environment variables:

```bash
# Database
DATABASE_URL="postgresql://..."
SUPABASE_URL="https://..."
SUPABASE_ANON_KEY="..."

# Vector Database  
PINECONE_API_KEY="..."
PINECONE_ENVIRONMENT="..."

# AI Services
OPENAI_API_KEY="..."

# Authentication
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
```

## 📚 Documentation

- **[Project Brief](./docs/ai-worldbuilding-brief.md)**: Strategic overview and market analysis
- **[PRD](./docs/ai-worldbuilding-prd.md)**: Detailed product requirements  
- **[Architecture](./docs/ai-worldbuilding-architecture.md)**: Technical architecture and system design
- **[Frontend Spec](./docs/ai-worldbuilding-frontend-spec.md)**: UI/UX specifications
- **[Project Management](./project-management/)**: Epics and user stories

## 🎬 Getting Started (Next Steps)

1. **Complete Epic 1**: ✅ **DONE** - Project setup and infrastructure
2. **Begin Epic 2**: Set up vector database and AI analysis engine
3. **Implement Authentication**: User registration and session management
4. **Database Setup**: PostgreSQL schema and Pinecone integration
5. **Deploy Infrastructure**: Vercel + AWS deployment pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- **Documentation**: Check the [docs](./docs/) folder
- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions

---

**Built with ❤️ to help creators break through worldbuilding paralysis and start their stories with confidence.**