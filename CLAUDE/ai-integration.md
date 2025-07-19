# AI Integration Architecture

## RAG Pipeline (Planned)
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

## Confidence Building System
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

## Vector Database Integration

### Pinecone Setup
```typescript
// services/vectorService.ts
import { Pinecone } from '@pinecone-database/pinecone';

export class VectorService {
  private pinecone: Pinecone;
  private indexName: string;

  constructor() {
    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
      environment: process.env.PINECONE_ENVIRONMENT!,
    });
    this.indexName = process.env.PINECONE_INDEX_NAME!;
  }

  async upsertEntity(entity: WorldEntity, embedding: number[]) {
    const index = this.pinecone.Index(this.indexName);
    
    await index.upsert([{
      id: entity.id,
      values: embedding,
      metadata: {
        worldId: entity.worldId,
        type: entity.type,
        name: entity.name,
        description: entity.description?.substring(0, 1000), // Pinecone metadata limit
      }
    }]);
  }

  async searchSimilar(queryVector: number[], worldId: string, limit = 10) {
    const index = this.pinecone.Index(this.indexName);
    
    const results = await index.query({
      vector: queryVector,
      topK: limit,
      filter: { worldId: { $eq: worldId } },
      includeMetadata: true,
    });

    return results.matches || [];
  }
}
```

## AI Cost Management
- **Embedding Caching**: Cache vector embeddings in Redis
- **Context Optimization**: Limit context window size for GPT-4
- **Batch Processing**: Group multiple AI operations
- **Fallback Strategies**: Graceful degradation when AI services unavailable

## OpenAI Integration
```typescript
// services/aiService.ts
import OpenAI from 'openai';

export class AIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });
  }

  async createEmbedding(content: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: content,
    });

    return response.data[0].embedding;
  }

  async assessWorldConfidence(world: WorldWithEntities): Promise<ConfidenceAssessment> {
    // Analyze world content with GPT-4
    const prompt = this.buildConfidencePrompt(world);
    
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    return this.parseConfidenceResponse(response.choices[0].message.content);
  }
}
```