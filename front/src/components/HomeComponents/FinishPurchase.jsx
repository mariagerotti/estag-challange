import axios from "axios";
import {
  selectCancelPurchase,
  selectProductsTotalPrice,
  selectProductsTotalTax,
} from "../../redux/cart/cartSelectors";
import "../HomeComponents/FinishPurchase.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cancelCart } from "../../redux/cart/actions";

const FinishPurchase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost/routes/products.php"
        );
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

      cart.forEach((item) => {
        const product = products.find((product) => product.code == item.code);
        if (product.amount > item.amount) {
          alert(`Product ${product.name} has only ${product.amount} in stock`);
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }

    const order = {
      products: products,
      total: productsTotalPrice,
      tax: productsTotalTax,
    };

    try {
      const res = await axios.post("http://localhost/routes/order.php", order);
      console.log(res);
      alert("Purchase completed");
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
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
