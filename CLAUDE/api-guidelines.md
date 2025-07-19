# API Guidelines (tRPC)

## Router Structure
```typescript
// Main application router
export const appRouter = router({
  auth: authRouter,        // Authentication and user management
  world: worldRouter,      // World CRUD operations
  entity: entityRouter,    // Entity management
  content: contentRouter,  // Content management
  ai: aiRouter,           // AI analysis and chat
  vector: vectorRouter,   // Vector database operations
});

export type AppRouter = typeof appRouter;
```

## Core API Patterns
```typescript
// Protected procedure pattern
const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx: { ...ctx, user: ctx.session.user } });
});

// Example world router
const worldRouter = router({
  // Get user's worlds
  getUserWorlds: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.db.world.findMany({
        where: { userId: ctx.user.id },
        include: { entities: true, content: true }
      });
    }),

  // Create new world
  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1).max(255),
      description: z.string().max(1000).optional(),
      genre: z.string().max(100).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.world.create({
        data: { ...input, userId: ctx.user.id }
      });
    }),

  // AI confidence assessment
  assessConfidence: protectedProcedure
    .input(z.object({ worldId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      // RAG-powered analysis implementation
      const world = await ctx.db.world.findUnique({
        where: { id: input.worldId },
        include: { entities: true, content: true }
      });
      
      // AI analysis logic here
      return aiService.assessWorldConfidence(world);
    }),
});
```

## Error Handling Patterns

### Frontend Error Handling
```typescript
export function useWorldMutation() {
  const mutation = api.world.create.useMutation({
    onError: (error) => {
      if (error.data?.code === 'UNAUTHORIZED') {
        router.push('/login');
      } else {
        toast.error(error.message || 'Something went wrong');
      }
    },
    onSuccess: (world) => {
      toast.success(`World "${world.title}" created!`);
      router.push(`/worlds/${world.id}`);
    }
  });
  
  return mutation;
}
```

### Backend Error Handling
```typescript
export const worldRouter = router({
  create: protectedProcedure
    .input(CreateWorldSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.world.create({
          data: { ...input, userId: ctx.user.id }
        });
      } catch (error) {
        if (error.code === 'P2002') { // Unique constraint
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'A world with this name already exists'
          });
        }
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create world'
        });
      }
    })
});
```

## Form Handling Pattern
```typescript
// Form component with validation
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateWorldSchema } from '@world-artificer/shared/validation';

export function CreateWorldForm() {
  const form = useForm({
    resolver: zodResolver(CreateWorldSchema),
    defaultValues: {
      title: '',
      description: '',
      genre: ''
    }
  });
  
  const createWorld = api.world.create.useMutation();
  
  const onSubmit = async (data: CreateWorldFormData) => {
    try {
      await createWorld.mutateAsync(data);
    } catch (error) {
      // Error handled by mutation onError
    }
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register('title')} />
      {form.formState.errors.title && (
        <span className="text-red-500">{form.formState.errors.title.message}</span>
      )}
      <button type="submit" disabled={createWorld.isLoading}>
        {createWorld.isLoading ? 'Creating...' : 'Create World'}
      </button>
    </form>
  );
}
```