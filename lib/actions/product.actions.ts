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

// get single product by its slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findUnique({
    where: { slug },
  });
  return convertToPlainObject(data);
}
