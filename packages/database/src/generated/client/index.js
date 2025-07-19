
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name',
  emailVerified: 'emailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.UserProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  experienceLevel: 'experienceLevel',
  preferredGenres: 'preferredGenres',
  communicationStyle: 'communicationStyle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WorldScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  genre: 'genre',
  status: 'status',
  confidenceScore: 'confidenceScore',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WorldEntityScalarFieldEnum = {
  id: 'id',
  worldId: 'worldId',
  entityType: 'entityType',
  name: 'name',
  description: 'description',
  content: 'content',
  embeddingId: 'embeddingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EntityRelationshipScalarFieldEnum = {
  id: 'id',
  sourceEntityId: 'sourceEntityId',
  targetEntityId: 'targetEntityId',
  worldId: 'worldId',
  relationshipType: 'relationshipType',
  strength: 'strength',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.WorldContentScalarFieldEnum = {
  id: 'id',
  worldId: 'worldId',
  contentType: 'contentType',
  title: 'title',
  content: 'content',
  tags: 'tags',
  embeddingId: 'embeddingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationPreferencesScalarFieldEnum = {
  id: 'id',
  userProfileId: 'userProfileId',
  interventions: 'interventions',
  celebrations: 'celebrations',
  suggestions: 'suggestions',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.ExperienceLevel = exports.$Enums.ExperienceLevel = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

exports.CommunicationStyle = exports.$Enums.CommunicationStyle = {
  ENCOURAGING: 'ENCOURAGING',
  DIRECT: 'DIRECT',
  DETAILED: 'DETAILED',
  MINIMAL: 'MINIMAL'
};

exports.WorldStatus = exports.$Enums.WorldStatus = {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  COMPLETED: 'COMPLETED'
};

exports.EntityType = exports.$Enums.EntityType = {
  CHARACTER: 'CHARACTER',
  LOCATION: 'LOCATION',
  FACTION: 'FACTION',
  EVENT: 'EVENT',
  CONCEPT: 'CONCEPT',
  ITEM: 'ITEM'
};

exports.ContentType = exports.$Enums.ContentType = {
  NOTE: 'NOTE',
  DOCUMENT: 'DOCUMENT',
  BRAINDUMP: 'BRAINDUMP',
  TEMPLATE: 'TEMPLATE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Session: 'Session',
  UserProfile: 'UserProfile',
  World: 'World',
  WorldEntity: 'WorldEntity',
  EntityRelationship: 'EntityRelationship',
  WorldContent: 'WorldContent',
  NotificationPreferences: 'NotificationPreferences'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/jimmymcbride/Documents/projects/world-artificer/packages/database/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9zcmMvZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKLy8gVXNlciBhdXRoZW50aWNhdGlvbiBhbmQgcHJvZmlsZQptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBwYXNzd29yZEhhc2ggIFN0cmluZyAgICBAbWFwKCJwYXNzd29yZF9oYXNoIikKICBuYW1lICAgICAgICAgIFN0cmluZz8KICBlbWFpbFZlcmlmaWVkIEJvb2xlYW4gICBAZGVmYXVsdChmYWxzZSkgQG1hcCgiZW1haWxfdmVyaWZpZWQiKQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQoKICAvLyBSZWxhdGlvbnMKICBzZXNzaW9ucyAgICAgIFNlc3Npb25bXQogIHByb2ZpbGUgICAgICAgVXNlclByb2ZpbGU/CiAgd29ybGRzICAgICAgICBXb3JsZFtdCgogIEBAbWFwKCJ1c2VycyIpCn0KCm1vZGVsIFNlc3Npb24gewogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICBTdHJpbmcgICBAbWFwKCJ1c2VyX2lkIikKICB0b2tlbiAgICAgU3RyaW5nICAgQHVuaXF1ZQogIGV4cGlyZXNBdCBEYXRlVGltZSBAbWFwKCJleHBpcmVzX2F0IikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQoKICAvLyBSZWxhdGlvbnMKICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKICBAQG1hcCgic2Vzc2lvbnMiKQp9Cgptb2RlbCBVc2VyUHJvZmlsZSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZSBAbWFwKCJ1c2VyX2lkIikKICBleHBlcmllbmNlTGV2ZWwgICAgICAgICBFeHBlcmllbmNlTGV2ZWwgICAgICAgIEBkZWZhdWx0KEJFR0lOTkVSKSBAbWFwKCJleHBlcmllbmNlX2xldmVsIikKICBwcmVmZXJyZWRHZW5yZXMgICAgICAgICBTdHJpbmdbXSAgICAgICAgICAgICAgIEBtYXAoInByZWZlcnJlZF9nZW5yZXMiKQogIGNvbW11bmljYXRpb25TdHlsZSAgICAgIENvbW11bmljYXRpb25TdHlsZSAgICAgQGRlZmF1bHQoRU5DT1VSQUdJTkcpIEBtYXAoImNvbW11bmljYXRpb25fc3R5bGUiKQogIG5vdGlmaWNhdGlvblByZWZlcmVuY2VzIE5vdGlmaWNhdGlvblByZWZlcmVuY2VzPwogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgLy8gUmVsYXRpb25zCiAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBtYXAoInVzZXJfcHJvZmlsZXMiKQp9CgovLyBXb3JsZCBidWlsZGluZyBlbnRpdGllcwptb2RlbCBXb3JsZCB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJJZCAgICAgICAgICBTdHJpbmcgICAgQG1hcCgidXNlcl9pZCIpCiAgdGl0bGUgICAgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uICAgICBTdHJpbmc/CiAgZ2VucmUgICAgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgV29ybGRTdGF0dXMgQGRlZmF1bHQoQUNUSVZFKQogIGNvbmZpZGVuY2VTY29yZSBGbG9hdD8gICAgQG1hcCgiY29uZmlkZW5jZV9zY29yZSIpCiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICAgIERhdGVUaW1lICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQoKICAvLyBSZWxhdGlvbnMKICB1c2VyICAgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgZW50aXRpZXMgICAgICAgICBXb3JsZEVudGl0eVtdCiAgY29udGVudCAgICAgICAgICBXb3JsZENvbnRlbnRbXQogIHJlbGF0aW9uc2hpcHMgICAgRW50aXR5UmVsYXRpb25zaGlwW10gQHJlbGF0aW9uKCJXb3JsZFJlbGF0aW9uc2hpcHMiKQoKICBAQG1hcCgid29ybGRzIikKfQoKbW9kZWwgV29ybGRFbnRpdHkgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHdvcmxkSWQgICAgICAgU3RyaW5nICAgICBAbWFwKCJ3b3JsZF9pZCIpCiAgZW50aXR5VHlwZSAgICBFbnRpdHlUeXBlIEBtYXAoImVudGl0eV90eXBlIikKICBuYW1lICAgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uICAgU3RyaW5nPwogIGNvbnRlbnQgICAgICAgSnNvbj8gICAgICAvLyBGbGV4aWJsZSBKU09OQiBjb250ZW50CiAgZW1iZWRkaW5nSWQgICBTdHJpbmc/ICAgIEBtYXAoImVtYmVkZGluZ19pZCIpIC8vIFBpbmVjb25lIHZlY3RvciBJRAogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZF9hdCIpCgogIC8vIFJlbGF0aW9ucwogIHdvcmxkICAgICAgICAgICAgICAgIFdvcmxkICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3dvcmxkSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBzb3VyY2VSZWxhdGlvbnNoaXBzICBFbnRpdHlSZWxhdGlvbnNoaXBbXSBAcmVsYXRpb24oIlNvdXJjZUVudGl0eSIpCiAgdGFyZ2V0UmVsYXRpb25zaGlwcyAgRW50aXR5UmVsYXRpb25zaGlwW10gQHJlbGF0aW9uKCJUYXJnZXRFbnRpdHkiKQoKICBAQG1hcCgid29ybGRfZW50aXRpZXMiKQp9Cgptb2RlbCBFbnRpdHlSZWxhdGlvbnNoaXAgewogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICBzb3VyY2VFbnRpdHlJZCAgIFN0cmluZyAgIEBtYXAoInNvdXJjZV9lbnRpdHlfaWQiKQogIHRhcmdldEVudGl0eUlkICAgU3RyaW5nICAgQG1hcCgidGFyZ2V0X2VudGl0eV9pZCIpCiAgd29ybGRJZCAgICAgICAgICBTdHJpbmcgICBAbWFwKCJ3b3JsZF9pZCIpCiAgcmVsYXRpb25zaGlwVHlwZSBTdHJpbmcgICBAbWFwKCJyZWxhdGlvbnNoaXBfdHlwZSIpCiAgc3RyZW5ndGggICAgICAgICBGbG9hdD8gICAvLyAwLjAtMS4wCiAgZGVzY3JpcHRpb24gICAgICBTdHJpbmc/CiAgY3JlYXRlZEF0ICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCgogIC8vIFJlbGF0aW9ucwogIHNvdXJjZUVudGl0eSBXb3JsZEVudGl0eSBAcmVsYXRpb24oIlNvdXJjZUVudGl0eSIsIGZpZWxkczogW3NvdXJjZUVudGl0eUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgdGFyZ2V0RW50aXR5IFdvcmxkRW50aXR5IEByZWxhdGlvbigiVGFyZ2V0RW50aXR5IiwgZmllbGRzOiBbdGFyZ2V0RW50aXR5SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB3b3JsZCAgICAgICAgV29ybGQgICAgICAgQHJlbGF0aW9uKCJXb3JsZFJlbGF0aW9uc2hpcHMiLCBmaWVsZHM6IFt3b3JsZElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCgogIEBAbWFwKCJlbnRpdHlfcmVsYXRpb25zaGlwcyIpCn0KCm1vZGVsIFdvcmxkQ29udGVudCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGN1aWQoKSkKICB3b3JsZElkICAgICBTdHJpbmcgICAgICBAbWFwKCJ3b3JsZF9pZCIpCiAgY29udGVudFR5cGUgQ29udGVudFR5cGUgQG1hcCgiY29udGVudF90eXBlIikKICB0aXRsZSAgICAgICBTdHJpbmc/CiAgY29udGVudCAgICAgU3RyaW5nCiAgdGFncyAgICAgICAgU3RyaW5nW10KICBlbWJlZGRpbmdJZCBTdHJpbmc/ICAgICBAbWFwKCJlbWJlZGRpbmdfaWQiKSAvLyBQaW5lY29uZSB2ZWN0b3IgSUQKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgLy8gUmVsYXRpb25zCiAgd29ybGQgV29ybGQgQHJlbGF0aW9uKGZpZWxkczogW3dvcmxkSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBtYXAoIndvcmxkX2NvbnRlbnQiKQp9CgovLyBFbnVtcwplbnVtIEV4cGVyaWVuY2VMZXZlbCB7CiAgQkVHSU5ORVIKICBJTlRFUk1FRElBVEUKICBBRFZBTkNFRAoKICBAQG1hcCgiZXhwZXJpZW5jZV9sZXZlbCIpCn0KCmVudW0gQ29tbXVuaWNhdGlvblN0eWxlIHsKICBFTkNPVVJBR0lORwogIERJUkVDVAogIERFVEFJTEVECiAgTUlOSU1BTAoKICBAQG1hcCgiY29tbXVuaWNhdGlvbl9zdHlsZSIpCn0KCmVudW0gV29ybGRTdGF0dXMgewogIEFDVElWRQogIEFSQ0hJVkVECiAgQ09NUExFVEVECgogIEBAbWFwKCJ3b3JsZF9zdGF0dXMiKQp9CgplbnVtIEVudGl0eVR5cGUgewogIENIQVJBQ1RFUgogIExPQ0FUSU9OCiAgRkFDVElPTgogIEVWRU5UCiAgQ09OQ0VQVAogIElURU0KCiAgQEBtYXAoImVudGl0eV90eXBlIikKfQoKZW51bSBDb250ZW50VHlwZSB7CiAgTk9URQogIERPQ1VNRU5UCiAgQlJBSU5EVU1QCiAgVEVNUExBVEUKCiAgQEBtYXAoImNvbnRlbnRfdHlwZSIpCn0KCi8vIE5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcyBzdG9yZWQgYXMgSlNPTgptb2RlbCBOb3RpZmljYXRpb25QcmVmZXJlbmNlcyB7CiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIHVzZXJQcm9maWxlSWQgICAgU3RyaW5nICAgICAgQHVuaXF1ZSBAbWFwKCJ1c2VyX3Byb2ZpbGVfaWQiKQogIHVzZXJQcm9maWxlICAgICAgVXNlclByb2ZpbGUgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJQcm9maWxlSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBpbnRlcnZlbnRpb25zICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KHRydWUpCiAgY2VsZWJyYXRpb25zICAgICBCb29sZWFuICAgICBAZGVmYXVsdCh0cnVlKQogIHN1Z2dlc3Rpb25zICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQodHJ1ZSkKICBlbWFpbCAgICAgICAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoIm5vdGlmaWNhdGlvbl9wcmVmZXJlbmNlcyIpCn0=",
  "inlineSchemaHash": "6bcfcbe11f0f66ef6c054ea899c1210afb8f0179755f9a1750f666e0b6df426e",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"dbName\":\"password_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"dbName\":\"email_verified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserProfile\",\"relationName\":\"UserToUserProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worlds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"World\",\"relationName\":\"UserToWorld\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":\"sessions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"dbName\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserProfile\":{\"dbName\":\"user_profiles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experienceLevel\",\"dbName\":\"experience_level\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ExperienceLevel\",\"default\":\"BEGINNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferredGenres\",\"dbName\":\"preferred_genres\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"communicationStyle\",\"dbName\":\"communication_style\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CommunicationStyle\",\"default\":\"ENCOURAGING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationPreferences\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationPreferences\",\"relationName\":\"NotificationPreferencesToUserProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserProfile\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"World\":{\"dbName\":\"worlds\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WorldStatus\",\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confidenceScore\",\"dbName\":\"confidence_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToWorld\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorldEntity\",\"relationName\":\"WorldToWorldEntity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorldContent\",\"relationName\":\"WorldToWorldContent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relationships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityRelationship\",\"relationName\":\"WorldRelationships\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorldEntity\":{\"dbName\":\"world_entities\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worldId\",\"dbName\":\"world_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityType\",\"dbName\":\"entity_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingId\",\"dbName\":\"embedding_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"world\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"World\",\"relationName\":\"WorldToWorldEntity\",\"relationFromFields\":[\"worldId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourceRelationships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityRelationship\",\"relationName\":\"SourceEntity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetRelationships\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityRelationship\",\"relationName\":\"TargetEntity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EntityRelationship\":{\"dbName\":\"entity_relationships\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourceEntityId\",\"dbName\":\"source_entity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetEntityId\",\"dbName\":\"target_entity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worldId\",\"dbName\":\"world_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relationshipType\",\"dbName\":\"relationship_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strength\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sourceEntity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorldEntity\",\"relationName\":\"SourceEntity\",\"relationFromFields\":[\"sourceEntityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetEntity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorldEntity\",\"relationName\":\"TargetEntity\",\"relationFromFields\":[\"targetEntityId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"world\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"World\",\"relationName\":\"WorldRelationships\",\"relationFromFields\":[\"worldId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorldContent\":{\"dbName\":\"world_content\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worldId\",\"dbName\":\"world_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contentType\",\"dbName\":\"content_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"embeddingId\",\"dbName\":\"embedding_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"world\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"World\",\"relationName\":\"WorldToWorldContent\",\"relationFromFields\":[\"worldId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NotificationPreferences\":{\"dbName\":\"notification_preferences\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProfileId\",\"dbName\":\"user_profile_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserProfile\",\"relationName\":\"NotificationPreferencesToUserProfile\",\"relationFromFields\":[\"userProfileId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interventions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celebrations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"suggestions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ExperienceLevel\":{\"values\":[{\"name\":\"BEGINNER\",\"dbName\":null},{\"name\":\"INTERMEDIATE\",\"dbName\":null},{\"name\":\"ADVANCED\",\"dbName\":null}],\"dbName\":\"experience_level\"},\"CommunicationStyle\":{\"values\":[{\"name\":\"ENCOURAGING\",\"dbName\":null},{\"name\":\"DIRECT\",\"dbName\":null},{\"name\":\"DETAILED\",\"dbName\":null},{\"name\":\"MINIMAL\",\"dbName\":null}],\"dbName\":\"communication_style\"},\"WorldStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"ARCHIVED\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null}],\"dbName\":\"world_status\"},\"EntityType\":{\"values\":[{\"name\":\"CHARACTER\",\"dbName\":null},{\"name\":\"LOCATION\",\"dbName\":null},{\"name\":\"FACTION\",\"dbName\":null},{\"name\":\"EVENT\",\"dbName\":null},{\"name\":\"CONCEPT\",\"dbName\":null},{\"name\":\"ITEM\",\"dbName\":null}],\"dbName\":\"entity_type\"},\"ContentType\":{\"values\":[{\"name\":\"NOTE\",\"dbName\":null},{\"name\":\"DOCUMENT\",\"dbName\":null},{\"name\":\"BRAINDUMP\",\"dbName\":null},{\"name\":\"TEMPLATE\",\"dbName\":null}],\"dbName\":\"content_type\"}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
