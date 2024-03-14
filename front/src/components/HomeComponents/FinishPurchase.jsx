import { selectCancelPurchase } from "../../redux/cart/cartSelectors";
import "../HomeComponents/FinishPurchase.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cancelCart } from "../../redux/cart/actions";

const FinishPurchase = () => {
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  // const cancelPurchase = useSelector(selectCancelPurchase);

  // useEffect(() => {}, [products]);

  const dispatch = useDispatch();
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const cancelPurchase = () => {
    dispatch(cancelCart());
  }

  return (
    <div className="main main-index" id="mainIndex">
      <div className="finish-add">
        <button className="primary-button" id="cancel" onClick={cancelPurchase}>
          Cancel
        </button>
        <button className="finish-button" id="finish-button">
          Finish
        </button>
      </div>
    </div>
  );
};
export default FinishPurchase;
