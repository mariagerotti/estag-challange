import { useState, useEffect } from "react";
import TrHistory from "./TrHistory";
import axios from "axios";

const TableHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get("http://localhost/routes/order.php");
        const data = res.data;

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);
  return (
    <div className="main main-history">
      <div className="table-history">
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
            {orders?.map((order) => (
              <TrHistory
                key={order.code}
                code={order.code}
                tax={order.tax}
                total={order.total}
                details={order.details}
                />
                ))}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};
export default TableHistory;
