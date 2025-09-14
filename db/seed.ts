import sampleData from './sample-data';
import { PrismaClient } from '@/lib/generated/prisma';

async function main() {
  const prisma = new PrismaClient();

  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleData.products,
  });
}
main()
  .then(() => {
    console.log('Seeding completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error during seeding:', error);
    process.exit(1);
  });
