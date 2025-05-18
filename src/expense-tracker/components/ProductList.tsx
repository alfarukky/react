import { useEffect, useState } from 'react';

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching product in ', category);
    setProducts(['clothing', 'household']);
  }, [category]);
  return <div></div>;
}

export default ProductList;
