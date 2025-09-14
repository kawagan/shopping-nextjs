import { Card, CardContent, CardHeader, Link } from '@mui/material';
import Image from 'next/image';
import ProductPrice from './produc-price';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center"></CardHeader>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          height={300}
          width={300}
          priority
        />
      </Link>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`} underline="none">
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
