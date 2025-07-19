import { PrismaClient } from './generated/client';

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// Prevent multiple instances of Prisma Client in development
export const prisma = globalThis.__prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma;
}

// Database utility functions
export const db = {
  // User operations
  user: {
    async create(data: {
      email: string;
      passwordHash: string;
      name?: string;
    }) {
      return prisma.user.create({
        data,
        include: {
          profile: true,
        },
      });
    },

    async findByEmail(email: string) {
      return prisma.user.findUnique({
        where: { email },
        include: {
          profile: true,
        },
      });
    },

    async findById(id: string) {
      return prisma.user.findUnique({
        where: { id },
        include: {
          profile: true,
        },
      });
    },

    async update(id: string, data: Partial<{
      email: string;
      name: string;
      emailVerified: boolean;
    }>) {
      return prisma.user.update({
        where: { id },
        data,
        include: {
          profile: true,
        },
      });
    },
  },

  // Session operations
  session: {
    async create(data: {
      userId: string;
      token: string;
      expiresAt: Date;
    }) {
      return prisma.session.create({
        data,
        include: {
          user: true,
        },
      });
    },

    async findByToken(token: string) {
      return prisma.session.findUnique({
        where: { token },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });
    },

    async deleteByToken(token: string) {
      return prisma.session.delete({
        where: { token },
      });
    },

    async deleteExpired() {
      return prisma.session.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });
    },
  },

  // World operations
  world: {
    async create(data: {
      userId: string;
      title: string;
      description?: string;
      genre?: string;
    }) {
      return prisma.world.create({
        data,
        include: {
          user: true,
          entities: true,
          content: true,
        },
      });
    },

    async findByUserId(userId: string) {
      return prisma.world.findMany({
        where: { userId },
        include: {
          entities: true,
          content: true,
          _count: {
            select: {
              entities: true,
              content: true,
              relationships: true,
            },
          },
        },
        orderBy: {
          updatedAt: 'desc',
        },
      });
    },

    async findById(id: string) {
      return prisma.world.findUnique({
        where: { id },
        include: {
          user: true,
          entities: true,
          content: true,
          relationships: {
            include: {
              sourceEntity: true,
              targetEntity: true,
            },
          },
        },
      });
    },
  },
};

export * from './generated/client';
export default prisma;