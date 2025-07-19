import { z } from 'zod';

/**
 * Validation utilities for World Artificer
 */

// UUID validation
export const isValidUUID = (value: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  return z.string().email().safeParse(email).success;
};

// Content validation
export const validateContentLength = (content: string, minLength = 1, maxLength = 10000): boolean => {
  return content.length >= minLength && content.length <= maxLength;
};

// World entity name validation
export const validateEntityName = (name: string): { valid: boolean; error?: string } => {
  if (!name || name.trim().length === 0) {
    return { valid: false, error: 'Name is required' };
  }
  
  if (name.length > 255) {
    return { valid: false, error: 'Name must be 255 characters or less' };
  }
  
  // Check for invalid characters (basic security)
  const invalidChars = /[<>]/;
  if (invalidChars.test(name)) {
    return { valid: false, error: 'Name contains invalid characters' };
  }
  
  return { valid: true };
};

// Confidence score validation (0-100)
export const validateConfidenceScore = (score: number): boolean => {
  return score >= 0 && score <= 100;
};

// Sanitize user input
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potentially harmful characters
    .slice(0, 10000); // Limit length
};

// Validate world genre
export const validateGenre = (genre: string): boolean => {
  const validGenres = [
    'fantasy', 'sci-fi', 'modern', 'historical', 'horror', 
    'mystery', 'romance', 'adventure', 'thriller', 'other'
  ];
  return validGenres.includes(genre.toLowerCase());
};

// Parse and validate JSON content
export const safeJsonParse = <T>(jsonString: string, defaultValue: T): T => {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch {
    return defaultValue;
  }
};