import { useState, useEffect } from "react";
import TrHistory from "./TrHistory";
import axios from "../../lib/axios";


const TableHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get("/routes/order.php");
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  return (
    <div className="main main-history">
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Tax</th>
            <th>Total</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody id="tbodyHistory">
          {orders.length > 0 &&
            orders?.map((order) => (
              <TrHistory key={order.code} order={order} />
            ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};
export default TableHistory;
