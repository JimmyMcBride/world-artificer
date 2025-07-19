# Core Domain Models

## User Management
```typescript
// User account and authentication
interface User {
  id: string;
  email: string;
  passwordHash: string;
  name?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// User creative preferences
interface UserProfile {
  id: string;
  userId: string;
  experienceLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  preferredGenres: string[];
  communicationStyle: 'ENCOURAGING' | 'DIRECT' | 'DETAILED' | 'MINIMAL';
  notificationPreferences?: NotificationPreferences;
}
```

## World Building Core
```typescript
// Top-level world container
interface World {
  id: string;
  userId: string;
  title: string;
  description?: string;
  genre?: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'COMPLETED';
  confidenceScore: number; // AI-calculated readiness (0-10)
  createdAt: Date;
  updatedAt: Date;
}

// Flexible entity system for all world elements
interface WorldEntity {
  id: string;
  worldId: string;
  type: 'CHARACTER' | 'LOCATION' | 'FACTION' | 'EVENT' | 'CONCEPT' | 'ITEM';
  name: string;
  description?: string;
  embeddingId?: string; // Pinecone vector ID for AI search
  createdAt: Date;
  updatedAt: Date;
}

// Relationships between entities
interface EntityRelationship {
  id: string;
  sourceEntityId: string;
  targetEntityId: string;
  type: 'ALLY' | 'ENEMY' | 'FAMILY' | 'LOCATION' | 'MEMBER' | 'CUSTOM';
  strength: number; // 0-10 relationship strength
  description?: string;
  discoveredBy: 'USER' | 'AI'; // How relationship was identified
}
```

## Content Management
```typescript
// Flexible content system
interface WorldContent {
  id: string;
  worldId: string;
  type: 'NOTE' | 'DOCUMENT' | 'BRAINDUMP' | 'TEMPLATE';
  title: string;
  content: string; // Rich text content
  tags: string[];
  embeddingId?: string; // For AI analysis
  createdAt: Date;
  updatedAt: Date;
}
```

## AI Analysis System
```typescript
// AI-powered confidence and readiness assessment
interface ConfidenceAssessment {
  id: string;
  worldId: string;
  overallScore: number; // 0-10 story readiness
  characterDevelopment: number;
  worldBuilding: number;
  conflictPotential: number;
  themeClarity: number;
  recommendations: string[];
  suggestedStoryTypes: string[];
  analyzedAt: Date;
}

// Creative block detection and intervention
interface CreativeSession {
  id: string;
  userId: string;
  worldId?: string;
  startTime: Date;
  endTime?: Date;
  durationMinutes?: number;
  activitiesCount: number;
  blocksDetected: string[]; // Types of blocks identified
  interventionOffered: boolean;
  confidenceChange: number; // Change in confidence during session
}
```