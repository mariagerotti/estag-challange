import axios from "../../lib/axios";
import PayPurchase from "../PayPurchase";
import {
  selectProductsTotalPrice,
  selectProductsTotalTax,
} from "../../redux/cart/cartSelectors";
import "../../assets/FinishPurchase.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cancelCart } from "../../redux/cart/actions";

const FinishPurchase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get("/routes/products.php");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  const { products: cart } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const productsTotalTax = useSelector(selectProductsTotalTax);

  const onFinishPurchase = async () => {
    try {
      if (cart.length === 0) {
        alert("Cart is empty");
        return;
      }
    } catch (error) {
      console.log(error);
    }

    const order = new FormData();

    order.append("products", products);
    order.append("total", productsTotalPrice);
    order.append("tax", productsTotalTax);

    try {
      const res = await axios.post("/routes/order.php", order);
      console.log(res);

      for (const item of cart) {
        const product = products.find((product) => product.code == item.code);

        if (item.amount <= product.amount) {
          product.amount -= item.amount;
          await axios.put(
            `http://localhost/routes/products.php?code=${product.code}`
          );
        } else {
          alert(`Product ${product.name} has only ${product.amount} in stock`);
          return;
        }
      }

      cart.forEach(async (item) => {
        let form = new FormData();
        form.append("order_code", parseInt(res.data.code));
        form.append("product_code", item.code);
        form.append("amount", parseInt(item.amount));
        form.append("price", parseFloat(item.price) * parseInt(item.amount));
        form.append("tax", parseFloat(item.tax) * parseInt(item.amount));

        await axios.post("/routes/orderItem.php", form);
      });
    } catch (error) {
      console.log(error);
    }
    dispatch(cancelCart());
  };

  const dispatch = useDispatch();
  const cancelPurchase = () => {
    dispatch(cancelCart());
  };

  return (
    <>
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
      <PayPurchase />
    </>
  );
};
export default FinishPurchase;
