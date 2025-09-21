'use client';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Product = ({ images }: { images: string[] }) => {
  const [curentImageIndex, setCurrentImageIndex] = React.useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[curentImageIndex]}
        alt="Product Image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              'border mr-2 cursor-pointer hover:border-orange-600',
              curentImageIndex === index && 'border-orange-500'
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
