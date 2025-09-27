import { z } from 'zod';
import { Product } from '../types/index';
import { formatNumberWithDecimal } from '../lib/utils';

// Price validation schema
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places (e.g., 49.99)'
  );

// Schema for inserting products

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters long'),
  slug: z.string().min(3),
  category: z.string().min(3),
  brand: z.string().min(2),
  description: z.string().min(1),
  stock: z.coerce.number().min(0),
  images: z.array(z.string()).min(1, 'At least one image URL is required'),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable(),
  price: currency,
});

// schema for signin users in
export const signinSchema = z.object({
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
