import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().max(255).optional(),
  emailVerified: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type User = z.infer<typeof UserSchema>;

export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
  preferredGenres: z.array(z.string()).optional(),
  communicationStyle: z.enum(['encouraging', 'direct', 'detailed', 'minimal']).default('encouraging'),
  notificationPreferences: z.object({
    interventions: z.boolean().default(true),
    celebrations: z.boolean().default(true),
    suggestions: z.boolean().default(true),
    email: z.boolean().default(false)
  }).optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type UserProfile = z.infer<typeof UserProfileSchema>;

export const SessionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  token: z.string(),
  expiresAt: z.date(),
  createdAt: z.date()
});

export type Session = z.infer<typeof SessionSchema>;