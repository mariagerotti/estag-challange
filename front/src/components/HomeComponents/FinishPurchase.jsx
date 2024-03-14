import axios from "axios";
import { selectCancelPurchase } from "../../redux/cart/cartSelectors";
import "../HomeComponents/FinishPurchase.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cancelCart } from "../../redux/cart/actions";

const FinishPurchase = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const onFinishPurchase = async () => {
    console.log(cart);
    if (cart.length < 1) {
      alert("Please buy something");
      return;
    } else {
      let data = new FormData();
      let tax = cart.reduce((acc, item) => acc + item.tax * item.bougth, 0);
      let total =
        cart.reduce((acc, item) => acc + item.price * item.bougth, 0) + tax;

      data.append("total", total);
      data.append("tax", tax);

      let order = await fetch("http://localhost/routes/order.php", {
        method: "POST",
        body: data,
      });

      let { code } = await order.json();

      cart.forEach(async (item) => {
        let form = new FormData();
        form.append("order_code", parseInt(code));
        form.append("product_code", item.code);
        form.append("amount", item.bougth);
        form.append("price", item.price * parseInt(item.bougth));
        form.append("tax", item.tax * item.bougth);

        await fetch("http://localhost/routes/orderItem.php", {
          method: "post",
          body: form,
        });
      });
    }

    const createOrder = async (order) => {
      try {
        const res = await axios.post(
          "http://localhost/routes/order.php",
          order
        );
        const data = res.data;
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    createOrder();
    alert("Product purchased successfully!");
  };
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  // const cancelPurchase = useSelector(selectCancelPurchase);

  // useEffect(() => {}, [products]);

  const dispatch = useDispatch();
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const cancelPurchase = () => {
    dispatch(cancelCart());
  };

  return (
    <div className="main main-index" id="mainIndex">
      <div className="finish-add">
        <button className="primary-button" id="cancel" onClick={cancelPurchase}>
          Cancel
        </button>
        <button
          className="finish-button"
          id="finish-button"
          onClick={onFinishPurchase}
        >
          Finish
        </button>
      </div>
    </div>
  );
};
export default FinishPurchase;
