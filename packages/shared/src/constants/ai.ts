/**
 * AI-related constants for World Artificer
 */

export const AI_CONFIG = {
  OPENAI_MODEL: 'gpt-4',
  EMBEDDING_MODEL: 'text-embedding-ada-002',
  EMBEDDING_DIMENSIONS: 1536,
  MAX_TOKENS: 4000,
  TEMPERATURE: 0.7,
  MAX_COMPLETION_TOKENS: 1000
} as const;

export const PINECONE_CONFIG = {
  INDEX_NAME: 'worldbuilding-embeddings',
  DIMENSION: 1536,
  METRIC: 'cosine',
  PODS: 1,
  REPLICAS: 1,
  POD_TYPE: 'p1.x1'
} as const;

export const CONFIDENCE_THRESHOLDS = {
  STORY_READY_MINIMUM: 70,
  HIGH_CONFIDENCE: 85,
  MEDIUM_CONFIDENCE: 60,
  LOW_CONFIDENCE: 40,
  INTERVENTION_THRESHOLD: 30
} as const;

export const READINESS_REQUIREMENTS = {
  SHORT_STORY: {
    minCharacters: 2,
    minLocations: 1,
    minConflicts: 1,
    characterDepthRequired: 60,
    worldComplexityRequired: 40,
    relationshipDensity: 30
  },
  NOVEL: {
    minCharacters: 5,
    minLocations: 3,
    minConflicts: 3,
    characterDepthRequired: 80,
    worldComplexityRequired: 70,
    relationshipDensity: 60
  },
  SERIES: {
    minCharacters: 8,
    minLocations: 5,
    minConflicts: 5,
    characterDepthRequired: 85,
    worldComplexityRequired: 85,
    relationshipDensity: 80
  }
} as const;

export const PARALYSIS_THRESHOLDS = {
  WORLDBUILDERS_DISEASE: {
    worldBuildingWithoutStoryProgressThreshold: 70,
    storyReadinessWithoutTransitionThreshold: 30,
    timeWithoutProgressDays: 14
  },
  ANALYSIS_PARALYSIS: {
    researchToCreationRatio: 5,
    navigationToContentRatio: 10,
    sessionDurationMinutes: 60
  },
  PERFECTIONISM_LOOP: {
    revisionRatio: 3,
    sameEntityRevisionLimit: 5,
    timeSpentRevisingHours: 2
  },
  SCOPE_CREEP: {
    entityGrowthRatePerWeek: 20,
    complexityIncreaseThreshold: 50,
    overallScopeThreshold: 200
  }
} as const;

export const AI_PROMPTS = {
  SYSTEM_CONTEXT: `You are an AI assistant for World Artificer, a worldbuilding platform that helps creators build confidence and prevent creative paralysis. Your role is to provide helpful, encouraging, and specific guidance that respects the user's creative vision while helping them make progress.`,
  
  ANALYSIS_CONTEXT: `Analyze the following world content for gaps, inconsistencies, and improvement opportunities. Focus on actionable insights that help the creator build a more complete and coherent world.`,
  
  CONFIDENCE_BUILDING: `Provide encouraging feedback that builds creative confidence. Acknowledge what the user has accomplished while suggesting gentle next steps.`,
  
  INTERVENTION_GUIDANCE: `Provide gentle, supportive intervention that helps the user break through creative blocks without being judgmental or pushy.`
} as const;

export const EMBEDDING_BATCH_SIZE = 50;
export const VECTOR_SEARCH_TOP_K = 20;
export const SEMANTIC_SIMILARITY_THRESHOLD = 0.7;