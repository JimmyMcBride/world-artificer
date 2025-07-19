# Performance Guidelines

## Frontend Optimization

### Code Splitting
```typescript
// Use dynamic imports for heavy components
const WorldEditor = dynamic(() => import('../components/WorldEditor'), {
  loading: () => <div>Loading editor...</div>,
  ssr: false
});

// Route-based code splitting (automatic with Next.js App Router)
// pages/worlds/[id]/edit/page.tsx - automatically code split
```

### Image Optimization
```typescript
// Use Next.js Image component with proper sizing
import Image from 'next/image';

export function WorldThumbnail({ world }: { world: World }) {
  return (
    <Image
      src={world.thumbnailUrl}
      alt={world.title}
      width={300}
      height={200}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

### Bundle Analysis
```bash
# Regular bundle analysis
npm run build
npm run analyze # or next-bundle-analyzer

# Monitor for:
# - Large vendor chunks (>500kb)
# - Unused dependencies
# - Duplicate code across chunks
```

### Lazy Loading
```typescript
// Defer non-critical component loading
import { lazy, Suspense } from 'react';

const Analytics = lazy(() => import('../components/Analytics'));
const ChatWidget = lazy(() => import('../components/ChatWidget'));

export function Dashboard() {
  return (
    <div>
      <MainContent />
      
      <Suspense fallback={null}>
        <Analytics />
        <ChatWidget />
      </Suspense>
    </div>
  );
}
```

## Backend Optimization

### Database Queries
```typescript
// Use select and include strategically
export async function getWorldForEdit(worldId: string) {
  return prisma.world.findUnique({
    where: { id: worldId },
    select: {
      id: true,
      title: true,
      description: true,
      // Only select fields needed for editing
    },
    include: {
      entities: {
        select: {
          id: true,
          name: true,
          type: true,
          // Don't include heavy description field
        }
      }
    }
  });
}

// Avoid N+1 queries with proper includes
export async function getWorldsWithEntityCounts(userId: string) {
  return prisma.world.findMany({
    where: { userId },
    include: {
      _count: {
        select: { entities: true, content: true }
      }
    }
  });
}
```

### Caching Strategy
```typescript
// Redis caching for frequently accessed data
import Redis from 'ioredis';

export class CacheService {
  private redis = new Redis(process.env.REDIS_URL);

  async cacheWorldSummary(worldId: string, summary: WorldSummary) {
    await this.redis.setex(
      `world:${worldId}:summary`,
      3600, // 1 hour TTL
      JSON.stringify(summary)
    );
  }

  async getCachedWorldSummary(worldId: string): Promise<WorldSummary | null> {
    const cached = await this.redis.get(`world:${worldId}:summary`);
    return cached ? JSON.parse(cached) : null;
  }
}
```

### Batch Operations
```typescript
// Combine multiple DB operations
export async function createWorldWithInitialContent(
  worldData: CreateWorldData,
  entities: CreateEntityData[]
) {
  return prisma.$transaction(async (tx) => {
    const world = await tx.world.create({
      data: worldData
    });

    if (entities.length > 0) {
      await tx.worldEntity.createMany({
        data: entities.map(entity => ({
          ...entity,
          worldId: world.id
        }))
      });
    }

    return world;
  });
}
```

### Vector Operations
```typescript
// Optimize Pinecone queries for <500ms response
export class VectorService {
  async searchSimilarEntities(
    queryVector: number[],
    worldId: string,
    options: {
      limit?: number;
      threshold?: number;
    } = {}
  ) {
    const { limit = 10, threshold = 0.7 } = options;

    // Use sparse vectors when possible
    const results = await this.pinecone.query({
      vector: queryVector,
      topK: Math.min(limit, 50), // Cap to prevent expensive queries
      filter: { 
        worldId: { $eq: worldId },
        score: { $gte: threshold }
      },
      includeMetadata: true,
    });

    return results.matches?.slice(0, limit) || [];
  }
}
```

## AI Cost Management

### Embedding Caching
```typescript
// Cache vector embeddings in Redis
export class EmbeddingService {
  private cache = new CacheService();

  async getOrCreateEmbedding(content: string): Promise<number[]> {
    const cacheKey = `embedding:${crypto
      .createHash('sha256')
      .update(content)
      .digest('hex')}`;

    // Check cache first
    const cached = await this.cache.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    // Generate new embedding
    const embedding = await this.openai.embeddings.create({
      model: 'text-embedding-3-small', // Cheaper than large
      input: content.substring(0, 8000), // Limit input size
    });

    const vector = embedding.data[0].embedding;

    // Cache for 24 hours
    await this.cache.setex(cacheKey, 86400, JSON.stringify(vector));

    return vector;
  }
}
```

### Context Optimization
```typescript
// Limit context window size for GPT-4
export function buildOptimizedPrompt(world: World, entities: WorldEntity[]) {
  const maxTokens = 3000; // Leave room for response
  
  let context = `World: ${world.title}\n${world.description}\n\n`;
  
  // Add entities in order of importance
  const sortedEntities = entities
    .sort((a, b) => (b.description?.length || 0) - (a.description?.length || 0))
    .slice(0, 10); // Limit entity count

  for (const entity of sortedEntities) {
    const entityText = `${entity.type}: ${entity.name}\n${entity.description}\n\n`;
    
    if (context.length + entityText.length > maxTokens * 4) { // Rough token estimate
      break;
    }
    
    context += entityText;
  }

  return context;
}
```

### Batch Processing
```typescript
// Group multiple AI operations
export class AIBatchService {
  private pendingEmbeddings: Array<{
    content: string;
    resolve: (embedding: number[]) => void;
  }> = [];

  async queueEmbedding(content: string): Promise<number[]> {
    return new Promise((resolve) => {
      this.pendingEmbeddings.push({ content, resolve });
      
      // Process batch when it reaches size limit or after timeout
      if (this.pendingEmbeddings.length >= 10) {
        this.processBatch();
      } else {
        setTimeout(() => this.processBatch(), 1000);
      }
    });
  }

  private async processBatch() {
    if (this.pendingEmbeddings.length === 0) return;

    const batch = this.pendingEmbeddings.splice(0, 100); // OpenAI batch limit
    
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: batch.map(item => item.content),
    });

    batch.forEach((item, index) => {
      item.resolve(response.data[index].embedding);
    });
  }
}
```

### Fallback Strategies
```typescript
// Graceful degradation when AI services unavailable
export class AIService {
  async assessWorldConfidence(world: WorldWithEntities): Promise<ConfidenceAssessment> {
    try {
      // Try AI-powered assessment first
      return await this.aiAssessment(world);
    } catch (error) {
      console.warn('AI assessment failed, using fallback:', error.message);
      
      // Fallback to rule-based assessment
      return this.ruleBasedAssessment(world);
    }
  }

  private ruleBasedAssessment(world: WorldWithEntities): ConfidenceAssessment {
    // Simple rule-based scoring
    const characterCount = world.entities.filter(e => e.type === 'CHARACTER').length;
    const locationCount = world.entities.filter(e => e.type === 'LOCATION').length;
    
    const characterScore = Math.min(characterCount / 3, 1) * 10;
    const worldScore = Math.min(locationCount / 5, 1) * 10;
    
    return {
      id: crypto.randomUUID(),
      worldId: world.id,
      overallScore: (characterScore + worldScore) / 2,
      characterDevelopment: characterScore,
      worldBuilding: worldScore,
      conflictPotential: 5, // Default neutral score
      themeClarity: 5,
      recommendations: ['Continue developing your world with more details'],
      suggestedStoryTypes: ['Adventure', 'Drama'],
      analyzedAt: new Date(),
    };
  }
}
```

## Monitoring and Metrics

### Performance Monitoring
- **Response Times**: Track API endpoint performance
- **Database Query Performance**: Monitor slow queries
- **AI Service Latency**: Track OpenAI/Pinecone response times
- **Bundle Size**: Regular bundle analysis
- **Core Web Vitals**: LCP, FID, CLS monitoring

### Cost Monitoring
- **AI API Usage**: Track OpenAI token consumption
- **Vector Database**: Monitor Pinecone operations
- **Database Queries**: Track expensive operations
- **CDN Costs**: Monitor asset delivery costs