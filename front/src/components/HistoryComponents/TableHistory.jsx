import { useState, useEffect } from 'react';
import TrHistory from './TrHistory';
import axios from '../../lib/axios';

const TableHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get('/routes/order.php');
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  const viewPurchaseDetails = async (code) => {
    try {
      const res = await axios.get(`/routes/order.php?code=${code}`);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='main main-history'>
      <div className='table-history'>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Tax</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody id='tbodyHistory'>
            {orders.length > 0 && orders?.map((order) => <TrHistory key={order.code} order={order} />)}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};
export default TableHistory;
