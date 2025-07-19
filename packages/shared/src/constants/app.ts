/**
 * Application constants for World Artificer
 */

export const APP_CONFIG = {
  name: 'World Artificer',
  description: 'AI-powered worldbuilding assistant that builds creative confidence',
  version: '0.1.0',
  author: 'Jimmy McBride',
  url: process.env.NODE_ENV === 'production' 
    ? 'https://worldartificer.com' 
    : 'http://localhost:3000'
} as const;

export const ENTITY_TYPES = {
  CHARACTER: 'character',
  LOCATION: 'location',
  FACTION: 'faction',
  EVENT: 'event',
  CONCEPT: 'concept',
  ITEM: 'item'
} as const;

export const WORLD_STATUS = {
  ACTIVE: 'active',
  ARCHIVED: 'archived',
  COMPLETED: 'completed'
} as const;

export const USER_EXPERIENCE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export const COMMUNICATION_STYLES = {
  ENCOURAGING: 'encouraging',
  DIRECT: 'direct',
  DETAILED: 'detailed',
  MINIMAL: 'minimal'
} as const;

export const CONTENT_TYPES = {
  NOTE: 'note',
  DOCUMENT: 'document',
  BRAINDUMP: 'braindump',
  TEMPLATE: 'template'
} as const;

export const ANALYSIS_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
} as const;

export const PARALYSIS_TYPES = {
  WORLDBUILDERS_DISEASE: 'worldbuilders_disease',
  ANALYSIS_PARALYSIS: 'analysis_paralysis',
  PERFECTIONISM_LOOP: 'perfectionism_loop',
  SCOPE_CREEP: 'scope_creep',
  DECISION_PARALYSIS: 'decision_paralysis',
  AVOIDANCE_BEHAVIOR: 'avoidance_behavior'
} as const;

export const LIMITS = {
  MAX_WORLDS_PER_USER: 10,
  MAX_ENTITIES_PER_WORLD: 1000,
  MAX_CONTENT_LENGTH: 10000,
  MAX_ENTITY_NAME_LENGTH: 255,
  MAX_WORLD_TITLE_LENGTH: 255,
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MAX_SEARCH_RESULTS: 50
} as const;

export const TIMEOUTS = {
  AI_RESPONSE_TIMEOUT: 30000, // 30 seconds
  DATABASE_QUERY_TIMEOUT: 10000, // 10 seconds
  VECTOR_SEARCH_TIMEOUT: 5000, // 5 seconds
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000 // 24 hours
} as const;

export const GENRES = [
  'fantasy',
  'sci-fi',
  'modern',
  'historical',
  'horror',
  'mystery',
  'romance',
  'adventure',
  'thriller',
  'western',
  'cyberpunk',
  'steampunk',
  'urban-fantasy',
  'other'
] as const;