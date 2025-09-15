'use server';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { PrismaClient } from '../generated/prisma';
import { convertToPlainObject } from '../utils';
const prisma = new PrismaClient();

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(data);
}
