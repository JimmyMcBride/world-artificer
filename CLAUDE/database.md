# Database Schema & Patterns

## Core Tables
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

## Key Indexes
```sql
-- Performance indexes
CREATE INDEX idx_worlds_user_id ON worlds(user_id);
CREATE INDEX idx_world_entities_world_id ON world_entities(world_id);
CREATE INDEX idx_world_entities_type ON world_entities(type);
CREATE INDEX idx_entity_relationships_source ON entity_relationships(source_entity_id);
CREATE INDEX idx_world_entities_embedding_id ON world_entities(embedding_id);
```

## Prisma Query Patterns

### Consistent Query Patterns
```typescript
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

### Query Optimization Guidelines
- **Use `select` and `include` strategically**: Always be explicit about what data you need
- **Avoid N+1 queries**: Use `include` to fetch related data in single query
- **Use transactions**: For operations affecting multiple tables
- **Index strategy**: Ensure foreign keys and frequently queried fields are indexed
- **Batch operations**: Use `createMany`, `updateMany` for bulk operations