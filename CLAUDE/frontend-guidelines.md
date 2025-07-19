# Frontend Guidelines

## Component Patterns

### Standard Component Interface
```typescript
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

// Component implementation with clsx for conditional styling
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className, 
  children, 
  ...props 
}: ComponentProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border border-input hover:bg-accent hover:text-accent-foreground': variant === 'outline',
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
      ) : null}
      {children}
    </button>
  );
}
```

## Component File Structure
```typescript
// ComponentName.tsx - Standard component file structure

// External imports
import React from 'react';
import { clsx } from 'clsx';

// Internal imports
import { ComponentProps } from '@world-artificer/shared/types';

// Types (if component-specific)
interface LocalProps extends ComponentProps {
  specialProp?: string;
}

// Component implementation
export function ComponentName({ specialProp, ...props }: LocalProps) {
  // Component logic
  return <div>Component content</div>;
}

// Default export (for Next.js pages)
export default ComponentName;
```

## Import Organization
```typescript
// Import order (enforced by ESLint + Prettier)
// 1. External libraries
import React from 'react';
import { NextPage } from 'next';
import { z } from 'zod';

// 2. Internal packages
import { api } from '@world-artificer/shared/api';
import { UserSchema } from '@world-artificer/shared/types';

// 3. Relative imports (closest last)
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';
```

## Styling Guidelines

### Tailwind CSS Patterns
- Use utility classes for consistent spacing and typography
- Leverage design tokens for colors, shadows, and borders
- Use `clsx` for conditional class application
- Follow mobile-first responsive design

### Component Variants
```typescript
// Use consistent variant patterns across components
const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
} as const;

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg',
} as const;
```

## State Management

### Zustand Store Pattern
```typescript
// stores/worldStore.ts
import { create } from 'zustand';
import { World, WorldEntity } from '@world-artificer/shared/types';

interface WorldState {
  currentWorld: World | null;
  entities: WorldEntity[];
  isLoading: boolean;
  
  // Actions
  setCurrentWorld: (world: World) => void;
  addEntity: (entity: WorldEntity) => void;
  updateEntity: (id: string, updates: Partial<WorldEntity>) => void;
  setLoading: (loading: boolean) => void;
}

export const useWorldStore = create<WorldState>((set) => ({
  currentWorld: null,
  entities: [],
  isLoading: false,
  
  setCurrentWorld: (world) => set({ currentWorld: world }),
  addEntity: (entity) => set((state) => ({ 
    entities: [...state.entities, entity] 
  })),
  updateEntity: (id, updates) => set((state) => ({
    entities: state.entities.map(entity => 
      entity.id === id ? { ...entity, ...updates } : entity
    )
  })),
  setLoading: (isLoading) => set({ isLoading }),
}));
```

## Performance Optimization
- **Code Splitting**: Use dynamic imports for heavy components
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Analysis**: Regular bundle size monitoring
- **Lazy Loading**: Defer non-critical component loading