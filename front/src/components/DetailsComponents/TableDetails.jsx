import { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import TrDetails from './TrDetails';

const TableDetails = () => {
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    const getOrderItem = async () => {
      try {
        const res = await axios.get('/routes/order_item.php');
        const data = res.data;
        setOrderItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderItem();
  }, []);
  return (
    <div className='main main-view'>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Product Code</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Tax</th>
          </tr>
        </thead>

        <tbody id='tbodyHistory'>
          {orderItem?.map((order) => (
            <TrDetails
              key={order.code}
              code={order.code}
              product_code={order.product_code}
              amount={order.amount}
              price={order.price}
              tax={order.tax}
            />
          ))}
        </tbody>
      </table>

      <div className='total-info'>
        <h3 className='tax-paid' id='tax'>
          Taxes you paid:
        </h3>

        <h1 id='total'>Total:</h1>
      </div>
    </div>
  );
};

export default TableDetails;
