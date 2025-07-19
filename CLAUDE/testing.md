# Testing Strategy

## Testing Architecture (Planned)
```
Testing Pyramid:
    E2E Tests (Playwright)
   /                    \
Integration Tests (Jest)
/                      \
Frontend Unit (Vitest)  Backend Unit (Jest)
```

## Test File Organization
```
packages/*/tests/
├── unit/           # Unit tests
├── integration/    # Integration tests  
├── fixtures/       # Test data
├── helpers/        # Test utilities
└── setup.ts       # Test configuration
```

## Testing Patterns

### Unit Test Example
```typescript
import { validateWorldEntity } from '../validation';

describe('validateWorldEntity', () => {
  it('should validate character entity', () => {
    const entity = {
      type: 'CHARACTER',
      name: 'Aria Brightblade',
      description: 'A skilled elven warrior'
    };
    
    expect(validateWorldEntity(entity)).toEqual({
      success: true,
      data: entity
    });
  });

  it('should reject entity with invalid type', () => {
    const entity = {
      type: 'INVALID_TYPE',
      name: 'Test Entity',
      description: 'Test description'
    };
    
    const result = validateWorldEntity(entity);
    expect(result.success).toBe(false);
    expect(result.error).toContain('Invalid entity type');
  });
});
```

### Integration Test Example
```typescript
import { appRouter } from '../router';

describe('World API', () => {
  it('should create world and return with entities', async () => {
    const caller = appRouter.createCaller({ user: mockUser, db: mockDb });
    
    const result = await caller.world.create({
      title: 'Test World',
      description: 'A test world'
    });
    
    expect(result.title).toBe('Test World');
    expect(result.userId).toBe(mockUser.id);
  });

  it('should require authentication for protected routes', async () => {
    const caller = appRouter.createCaller({ user: null, db: mockDb });
    
    await expect(caller.world.create({
      title: 'Test World'
    })).rejects.toThrow('UNAUTHORIZED');
  });
});
```

### Component Test Example
```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateWorldForm } from '../CreateWorldForm';

describe('CreateWorldForm', () => {
  it('should submit form with valid data', async () => {
    const onSubmit = jest.fn();
    render(<CreateWorldForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'My New World' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: 'Create World' }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        title: 'My New World',
        description: '',
        genre: ''
      });
    });
  });

  it('should show validation errors for empty title', async () => {
    render(<CreateWorldForm onSubmit={jest.fn()} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Create World' }));
    
    await waitFor(() => {
      expect(screen.getByText('Title is required')).toBeInTheDocument();
    });
  });
});
```

## Test Data Management

### Test Fixtures
```typescript
// tests/fixtures/worldData.ts
export const mockUser = {
  id: 'user-1',
  email: 'test@example.com',
  name: 'Test User'
};

export const mockWorld = {
  id: 'world-1',
  userId: 'user-1',
  title: 'Test World',
  description: 'A world for testing',
  status: 'ACTIVE' as const,
  confidenceScore: 5.5,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
};

export const mockEntities = [
  {
    id: 'entity-1',
    worldId: 'world-1',
    type: 'CHARACTER' as const,
    name: 'Test Character',
    description: 'A character for testing'
  }
];
```

### Database Mocking
```typescript
// tests/helpers/mockDb.ts
export const mockDb = {
  world: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn()
  },
  worldEntity: {
    create: jest.fn(),
    findMany: jest.fn(),
    createMany: jest.fn()
  }
};
```

## Testing Guidelines

### What to Test
- **Business Logic**: Core application logic and calculations
- **API Endpoints**: Input validation, authorization, error handling
- **Components**: User interactions and state changes
- **Utilities**: Pure functions and data transformations
- **Integration**: Database queries and external service calls

### What Not to Test
- **Third-party Libraries**: Trust that they work as documented
- **Implementation Details**: Focus on behavior, not internal structure
- **Trivial Code**: Simple getters/setters without logic

### Test Naming Convention
```typescript
describe('ComponentName', () => {
  describe('when user is authenticated', () => {
    it('should render user dashboard', () => {
      // Test implementation
    });
  });

  describe('when user is not authenticated', () => {
    it('should redirect to login page', () => {
      // Test implementation
    });
  });
});
```

## Continuous Integration

### Test Automation
- Run tests on every pull request
- Require passing tests before merge
- Generate coverage reports
- Run E2E tests on staging deployments

### Coverage Goals
- **Unit Tests**: 80%+ line coverage
- **Integration Tests**: Cover all API endpoints
- **E2E Tests**: Cover critical user journeys