import { betterAuth } from 'better-auth';
import { PrismaClient } from '../../generated/prisma';
import { prismaAdapter } from 'better-auth/adapters/prisma';

const prisma = new PrismaClient();

export const auth = betterAuth({
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'user',
      },
    },
    modelName: 'users',
  },
  session: {
    modelName: 'sessions',
  },
  url: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true,
    maxPasswordLength: 128,
    minPasswordLength: 8,
    autoSignIn: false,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  trustedOrigins: ['http://localhost:4000', 'http://localhost:3000'],
});
