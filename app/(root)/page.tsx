import ProductList from '@/components/shared/header/product/product.list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';

const Home = async () => {
  const latestProducts = await getLatestProducts();

  console.log('Latest Products:', latestProducts);

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Home;
