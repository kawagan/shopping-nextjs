import ProductList from '@/components/shared/header/product/product.list';
import sampleData from '@/db/sample-data';

const Home = async () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </>
  );
};

export default Home;
