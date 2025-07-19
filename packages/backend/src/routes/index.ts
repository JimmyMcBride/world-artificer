import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import type { Request, Response } from 'express';

// Create context type
interface Context {
  req: Request;
  res: Response;
}

// Initialize tRPC
const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

// Health check procedure
const healthRouter = router({
  check: publicProcedure
    .query(() => {
      return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'world-artificer-backend',
        version: '0.1.0'
      };
    }),
});

// World router (placeholder for future implementation)
const worldRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        message: `Hello ${input.name}! Welcome to World Artificer.`,
        timestamp: new Date().toISOString()
      };
    }),
    
  // Placeholder for world creation
  create: publicProcedure
    .input(z.object({
      title: z.string().min(1).max(255),
      description: z.string().optional(),
      genre: z.string().optional()
    }))
    .mutation(({ input }) => {
      // TODO: Implement world creation logic
      return {
        id: 'placeholder-id',
        title: input.title,
        description: input.description,
        genre: input.genre,
        createdAt: new Date().toISOString(),
        message: 'World creation endpoint ready for implementation'
      };
    }),
});

// Main app router
export const appRouter = router({
  health: healthRouter,
  world: worldRouter,
});

// Export type definition for frontend
export type AppRouter = typeof appRouter;