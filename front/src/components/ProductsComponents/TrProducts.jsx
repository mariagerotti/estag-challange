import DeleteButton from '.././DeleteButton/DeleteButton';
import { useState } from 'react';
import axios from '../../lib/axios';

const TrProducts = ({ code, product, price, amount, category }) => {
  const deleteProduct = async (code) => {
    // deleta da api

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      try {
        const res = await axios.get('/routes/product.php');
        const data = res.data;

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    try {
      await fetch(`/routes/products.php?code=${code}`, {
        method: 'DELETE'
      });
      await getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr>
      <td>{code}</td>
      <td>{product}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{category}</td>
      <td>
        <DeleteButton onclick={deleteProduct} />
      </td>
    </tr>
  );
};

export default TrProducts;
