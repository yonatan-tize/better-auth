import { betterAuth } from 'better-auth';
import { PrismaClient } from 'generated/prisma';
import { prismaAdapter } from 'better-auth/adapters/prisma';

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});
