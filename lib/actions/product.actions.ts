'use server';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { convertToPlainObject } from '../utils';
import { prisma } from '../../db/prisma';

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(data);
}
