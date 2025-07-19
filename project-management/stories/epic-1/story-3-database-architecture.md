# Story 3: Database Architecture Setup

## User Story
As a **developer**,
I want **PostgreSQL and Pinecone vector database configured and connected**,
So that I can **store user data and world relationships for AI analysis**.

## Story Details
- **Epic:** Epic 1 - Core Platform Infrastructure
- **Priority:** High
- **Effort Estimate:** 4 days
- **Status:** Not Started
- **Assigned to:** [Developer Name]

## Acceptance Criteria

### PostgreSQL Setup (Supabase)
1. **Database Provisioning:** Supabase PostgreSQL instance configured for development and production
2. **Schema Design:** Initial tables for users, worlds, entities, and relationships
3. **Connection Management:** Database connection pooling and configuration
4. **Migration System:** Database versioning and migration management with Prisma
5. **Indexing Strategy:** Proper indexes for performance optimization
6. **Backup Strategy:** Automated backups configured

### Vector Database Setup (Pinecone)
7. **Pinecone Configuration:** Vector database configured for semantic world relationship storage
8. **Index Setup:** Pinecone index configured for 1536-dimension OpenAI embeddings
9. **Connection Integration:** Pinecone SDK integrated into backend services
10. **Embedding Pipeline:** Basic system for storing and retrieving vector embeddings
11. **Performance Optimization:** Query optimization for sub-500ms responses

### ORM and Integration
12. **Prisma Setup:** ORM configured with type-safe queries and schema management
13. **Connection Pooling:** Efficient database connection management
14. **Environment Configuration:** Database URLs and credentials properly managed
15. **Error Handling:** Robust error handling for database operations

## Technical Notes

### Database Schema Design

#### Core Tables
```sql
-- Users (already defined in Story 2)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Worlds
CREATE TABLE worlds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  genre VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active',
  confidence_score DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- World Entities (characters, locations, factions, etc.)
CREATE TABLE world_entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id UUID REFERENCES worlds(id) ON DELETE CASCADE,
  entity_type VARCHAR(50) NOT NULL, -- 'character', 'location', 'faction', 'event'
  name VARCHAR(255) NOT NULL,
  description TEXT,
  content JSONB, -- Flexible content storage
  embedding_id VARCHAR(255), -- Reference to Pinecone vector
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Entity Relationships
CREATE TABLE entity_relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_entity_id UUID REFERENCES world_entities(id) ON DELETE CASCADE,
  target_entity_id UUID REFERENCES world_entities(id) ON DELETE CASCADE,
  relationship_type VARCHAR(100) NOT NULL,
  strength DECIMAL(3,2), -- Relationship strength 0.0-1.0
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- World Content (notes, documents, etc.)
CREATE TABLE world_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id UUID REFERENCES worlds(id) ON DELETE CASCADE,
  content_type VARCHAR(50) NOT NULL, -- 'note', 'document', 'braindump'
  title VARCHAR(255),
  content TEXT NOT NULL,
  tags VARCHAR(255)[],
  embedding_id VARCHAR(255), -- Reference to Pinecone vector
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Indexes for Performance
```sql
-- User and world access patterns
CREATE INDEX idx_worlds_user_id ON worlds(user_id);
CREATE INDEX idx_world_entities_world_id ON world_entities(world_id);
CREATE INDEX idx_world_entities_type ON world_entities(entity_type);
CREATE INDEX idx_world_content_world_id ON world_content(world_id);
CREATE INDEX idx_entity_relationships_source ON entity_relationships(source_entity_id);
CREATE INDEX idx_entity_relationships_target ON entity_relationships(target_entity_id);

-- Search and filtering
CREATE INDEX idx_world_entities_name ON world_entities USING gin(to_tsvector('english', name));
CREATE INDEX idx_world_content_search ON world_content USING gin(to_tsvector('english', title || ' ' || content));
CREATE INDEX idx_world_content_tags ON world_content USING gin(tags);
```

### Pinecone Configuration
```typescript
// Pinecone index configuration
const pineconeConfig = {
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
  indexName: 'worldbuilding-embeddings',
  dimension: 1536, // OpenAI ada-002 embedding dimension
  metric: 'cosine',
  pods: 1, // Start with 1 pod for development
  replicas: 1,
  pod_type: 'p1.x1' // Starter pod type
};
```

### Technology Stack
- **PostgreSQL:** Supabase for hosted PostgreSQL with real-time features
- **Vector Database:** Pinecone for semantic search and relationship storage
- **ORM:** Prisma for type-safe database operations
- **Connection Pooling:** Built-in Supabase connection pooling
- **Migrations:** Prisma migrate for version control

## Definition of Done
- [ ] Supabase PostgreSQL database is provisioned and accessible
- [ ] All core tables are created with proper relationships and constraints
- [ ] Prisma ORM is configured with generated client and type safety
- [ ] Database migrations work correctly (up and down)
- [ ] Pinecone vector database is configured and accessible
- [ ] Backend can connect to both databases successfully
- [ ] Basic CRUD operations work for all core entities
- [ ] Vector embeddings can be stored and retrieved from Pinecone
- [ ] Database performance meets requirements (<100ms for simple queries)
- [ ] Connection pooling is configured and working
- [ ] Environment variables are properly configured for all database connections

## Testing Criteria
- [ ] Database connections work in development and can be configured for production
- [ ] All database operations handle errors gracefully
- [ ] Prisma schema matches actual database structure
- [ ] Vector operations complete within performance requirements
- [ ] Database migrations can be run repeatedly without errors
- [ ] Connection pooling prevents connection exhaustion under load
- [ ] Backup and restore procedures work correctly

## Dependencies
- Story 1: Project Setup & Monorepo Configuration (must be complete)
- Supabase account and project setup
- Pinecone account and API key

## Blocked By
- Project foundation must be established
- External service accounts (Supabase, Pinecone) must be created

## Performance Requirements
- **PostgreSQL Queries:** <100ms for simple queries, <500ms for complex queries
- **Vector Queries:** <500ms for semantic search operations
- **Connection Management:** Support 100+ concurrent connections
- **Throughput:** Handle 1000+ database operations per minute

## Security Considerations
- Database credentials stored securely in environment variables
- Connection strings use SSL in production
- Proper role-based access control in Supabase
- API keys for Pinecone secured and rotated regularly

## Notes
- Start with simple schema, plan for future expansion
- Consider partitioning strategies for large-scale data
- Plan for database monitoring and performance optimization
- Vector database costs scale with usage - monitor carefully

## Related Stories
- Story 2: Authentication System Implementation (shares user table)
- Story 4: Deployment Pipeline Configuration (depends on database configuration)
- Epic 2 Stories: Will heavily utilize this database architecture
- Future: Database optimization and scaling stories