import { z } from 'zod';

// API Response Types
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.object({
    message: z.string(),
    code: z.string().optional(),
    details: z.any().optional()
  }).optional(),
  timestamp: z.date()
});

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
  timestamp: Date;
};

// Pagination Types
export const PaginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  total: z.number().nonnegative(),
  totalPages: z.number().nonnegative()
});

export type Pagination = z.infer<typeof PaginationSchema>;

export const PaginatedResponseSchema = <T>(dataSchema: z.ZodSchema<T>) => 
  z.object({
    data: z.array(dataSchema),
    pagination: PaginationSchema
  });

// Search Types
export const SearchQuerySchema = z.object({
  query: z.string().min(1),
  type: z.enum(['keyword', 'semantic', 'natural_language', 'relationship']).default('semantic'),
  filters: z.object({
    entityTypes: z.array(z.string()).optional(),
    dateRange: z.object({
      start: z.date(),
      end: z.date()
    }).optional(),
    confidenceThreshold: z.number().min(0).max(1).optional(),
    worldSections: z.array(z.string()).optional()
  }).optional(),
  sortBy: z.enum(['relevance', 'date', 'alphabetical', 'confidence']).default('relevance'),
  limit: z.number().min(1).max(100).default(10)
});

export type SearchQuery = z.infer<typeof SearchQuerySchema>;

export const SearchResultSchema = z.object({
  id: z.string().uuid(),
  entityType: z.string(),
  title: z.string(),
  snippet: z.string(),
  relevanceScore: z.number().min(0).max(1),
  matchType: z.enum(['exact', 'semantic', 'relationship', 'contextual']),
  matchedFields: z.array(z.string()),
  lastModified: z.date(),
  path: z.array(z.string()) // Breadcrumb navigation
});

export type SearchResult = z.infer<typeof SearchResultSchema>;