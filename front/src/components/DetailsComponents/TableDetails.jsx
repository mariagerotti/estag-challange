import { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import TrDetails from './TrDetails';

const TableDetails = ({ orderItems }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('/routes/products.php');

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Product Code</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Tax</th>
        </tr>
      </thead>

      <tbody>
        {orderItems?.map((order) => (
          <TrDetails
            key={order.code}
            order={order}
            product={products.find((product) => product.code == order.product_code)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableDetails;
