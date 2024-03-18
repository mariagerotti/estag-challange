import { useState } from 'react';
import axios from '../lib/axios';

import FormProducts from '../components/ProductsComponents/FormProducts';
import TableProducts from '../components/ProductsComponents/TableProducts';
import PagesTitle from '../components/PagesTitle';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    axios.get('/routes/products.php').then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  const deleteProduct = async (code) => {
    try {
      await axios.delete(`/routes/products.php?code=${code}`);
      await getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getProducts();
  }, []);

  return (
    <div className='categories-component'>
      <PagesTitle>Products</PagesTitle>
      <FormProducts />
      <TableProducts products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Products;
