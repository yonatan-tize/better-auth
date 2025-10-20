import { betterAuth } from 'better-auth';
import { PrismaClient } from '../../generated/prisma';
import { prismaAdapter } from 'better-auth/adapters/prisma';

const prisma = new PrismaClient();

export const auth = betterAuth({
  url: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    maxPasswordLength: 20,
    minPasswordLength: 8,
    autoSignIn: false,
  },
  trustedOrigins: ['http://localhost:4000'],
});
