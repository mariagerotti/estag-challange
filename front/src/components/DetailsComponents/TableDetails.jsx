import axios from "axios";
import TrDetails from "./TrDetails";

const TableDetails = () => {
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    const getOrderItem = async () => {
      try {
        const res = await axios.get("http://localhost/routes/order_item.php");
        const data = res.data;
        setOrderItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderItem();
  }, []);
  return (
    <div class="main main-view">
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

        <tbody id="tbodyHistory">
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

      <div class="total-info">
        <h3 class="tax-paid" id="tax">
          Taxes you paid:
        </h3>

        <h1 id="total">Total:</h1>
      </div>
    </div>
  );
};

export default TableDetails;