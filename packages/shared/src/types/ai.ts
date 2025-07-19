import { z } from 'zod';

// AI Analysis Types
export const AnalysisTypeSchema = z.enum([
  'gap_analysis',
  'consistency_check', 
  'completeness_assessment',
  'relationship_analysis',
  'quality_evaluation'
]);

export type AnalysisType = z.infer<typeof AnalysisTypeSchema>;

export const AnalysisResultSchema = z.object({
  id: z.string().uuid(),
  category: z.string(),
  severity: z.enum(['low', 'medium', 'high', 'critical']),
  title: z.string(),
  description: z.string(),
  affectedEntities: z.array(z.string().uuid()),
  suggestions: z.array(z.string()),
  confidence: z.number().min(0).max(1)
});

export type AnalysisResult = z.infer<typeof AnalysisResultSchema>;

export const WorldAnalysisSchema = z.object({
  worldId: z.string().uuid(),
  analysisType: AnalysisTypeSchema,
  timestamp: z.date(),
  results: z.array(AnalysisResultSchema),
  overallScore: z.number().min(0).max(100),
  recommendations: z.array(z.string())
});

export type WorldAnalysis = z.infer<typeof WorldAnalysisSchema>;

// Story Readiness Types
export const StoryTypeSchema = z.enum([
  'short_story',
  'novella', 
  'novel',
  'series',
  'episodic',
  'anthology'
]);

export type StoryType = z.infer<typeof StoryTypeSchema>;

export const StoryReadinessSchema = z.object({
  worldId: z.string().uuid(),
  assessmentDate: z.date(),
  overallReadiness: z.number().min(0).max(100),
  storyTypes: z.array(z.object({
    storyType: StoryTypeSchema,
    genre: z.string(),
    readinessScore: z.number().min(0).max(100),
    missingElements: z.array(z.string()),
    strengthAreas: z.array(z.string())
  })),
  nextMilestones: z.array(z.string())
});

export type StoryReadiness = z.infer<typeof StoryReadinessSchema>;

// Block Prevention Types
export const ParalysisTypeSchema = z.enum([
  'worldbuilders_disease',
  'analysis_paralysis', 
  'perfectionism_loop',
  'scope_creep',
  'decision_paralysis',
  'avoidance_behavior'
]);

export type ParalysisType = z.infer<typeof ParalysisTypeSchema>;

export const ParalysisDetectionSchema = z.object({
  userId: z.string().uuid(),
  worldId: z.string().uuid(),
  detectionType: ParalysisTypeSchema,
  confidence: z.number().min(0).max(100),
  severity: z.enum(['mild', 'moderate', 'severe']),
  timestamp: z.date(),
  triggers: z.array(z.object({
    metric: z.string(),
    threshold: z.number(),
    currentValue: z.number(),
    timeframe: z.string(),
    weight: z.number().min(0).max(1)
  }))
});

export type ParalysisDetection = z.infer<typeof ParalysisDetectionSchema>;