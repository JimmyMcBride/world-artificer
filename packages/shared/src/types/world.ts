import { z } from 'zod';

// Core World Types
export const EntityTypeSchema = z.enum([
  'character',
  'location', 
  'faction',
  'event',
  'concept',
  'item'
]);

export type EntityType = z.infer<typeof EntityTypeSchema>;

export const WorldSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  genre: z.string().max(100).optional(),
  status: z.enum(['active', 'archived', 'completed']).default('active'),
  confidenceScore: z.number().min(0).max(100).optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type World = z.infer<typeof WorldSchema>;

export const WorldEntitySchema = z.object({
  id: z.string().uuid(),
  worldId: z.string().uuid(),
  entityType: EntityTypeSchema,
  name: z.string().min(1).max(255),
  description: z.string().optional(),
  content: z.record(z.any()).optional(), // JSONB flexible content
  embeddingId: z.string().optional(), // Pinecone vector ID
  createdAt: z.date(),
  updatedAt: z.date()
});

export type WorldEntity = z.infer<typeof WorldEntitySchema>;

export const EntityRelationshipSchema = z.object({
  id: z.string().uuid(),
  sourceEntityId: z.string().uuid(),
  targetEntityId: z.string().uuid(),
  relationshipType: z.string().max(100),
  strength: z.number().min(0).max(1).optional(), // 0.0-1.0
  description: z.string().optional(),
  createdAt: z.date()
});

export type EntityRelationship = z.infer<typeof EntityRelationshipSchema>;

export const WorldContentSchema = z.object({
  id: z.string().uuid(),
  worldId: z.string().uuid(),
  contentType: z.enum(['note', 'document', 'braindump', 'template']),
  title: z.string().max(255).optional(),
  content: z.string(),
  tags: z.array(z.string()).optional(),
  embeddingId: z.string().optional(), // Pinecone vector ID
  createdAt: z.date(),
  updatedAt: z.date()
});

export type WorldContent = z.infer<typeof WorldContentSchema>;

// AI Analysis Types
export const ConfidenceMetricsSchema = z.object({
  overall: z.number().min(0).max(100),
  trend: z.enum(['increasing', 'stable', 'decreasing']),
  weeklyChange: z.number(),
  storyReadiness: z.number().min(0).max(100),
  lastMajorIncrease: z.date().optional()
});

export type ConfidenceMetrics = z.infer<typeof ConfidenceMetricsSchema>;

export const CategoryMetricsSchema = z.object({
  category: z.enum(['characters', 'locations', 'plot', 'worldbuilding', 'relationships']),
  confidence: z.number().min(0).max(100),
  completeness: z.number().min(0).max(100),
  quality: z.number().min(0).max(100),
  entityCount: z.number().nonnegative(),
  trend: z.enum(['up', 'down', 'stable']),
  lastActivity: z.date().optional()
});

export type CategoryMetrics = z.infer<typeof CategoryMetricsSchema>;