# Neon Database Setup with Prisma

## Current Configuration

The application is currently configured to work with Neon PostgreSQL using a direct Prisma connection.

### Files Updated

- `db/prisma.ts` - Simplified Prisma client configuration
- `prisma/schema.prisma` - Custom output location for generated client

### Working Configuration

```typescript
// db/prisma.ts
import { PrismaClient } from '@/lib/generated/prisma';

export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
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
```

## Neon Serverless Driver Options

Based on the [Neon serverless driver documentation](https://neon.com/docs/serverless/serverless-driver), there are two main approaches:

### 1. HTTP Queries (Current Alternative)

- Best for: Single, non-interactive transactions ("one-shot queries")
- Faster for simple queries
- Works well with our current Prisma setup

### 2. WebSocket Queries (Future Enhancement)

- Best for: Session support, interactive transactions, node-postgres compatibility
- Requires the `@neondatabase/serverless` Pool/Client with WebSocket configuration
- Better for complex transactional workflows

## Future Enhancements

If you need the Neon serverless driver for edge functions or specific serverless optimizations, you can implement:

### Option A: HTTP Driver for Simple Queries

```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
// Use for simple, direct SQL queries
```

### Option B: WebSocket Driver with Prisma Adapter

```typescript
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

// Configure WebSocket
neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaNeon(pool);

// Use with PrismaClient
const prisma = new PrismaClient({ adapter });
```

## Environment Variables

Ensure your `.env` file contains:

```
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
```

## Benefits of Current Setup

1. ✅ **Stability**: Uses the standard Prisma PostgreSQL connection
2. ✅ **Simplicity**: No additional adapter complexity
3. ✅ **Performance**: Direct connection to Neon works efficiently
4. ✅ **Compatibility**: Works with all Prisma features out of the box
5. ✅ **Development**: Easy debugging with query logging

## When to Consider the Neon Adapter

- **Edge Runtime**: When deploying to Vercel Edge Functions, Cloudflare Workers
- **Serverless Functions**: For functions with cold start optimizations
- **Connection Pooling**: When you need advanced connection pool management
- **WebSocket Support**: For interactive transactions or session management

The current setup is excellent for development and most production scenarios with Neon.
