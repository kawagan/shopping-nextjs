import { PrismaClient } from '@/lib/generated/prisma';

// Create and export Prisma client
// For production with Neon, the connection string in DATABASE_URL is sufficient
// Neon's Postgres protocol works directly with Prisma without needing the adapter
export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  // Enable connection pooling for better performance with Neon
  datasourceUrl: process.env.DATABASE_URL,
}).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
