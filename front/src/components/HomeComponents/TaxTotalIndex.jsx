import { useEffect } from "react";
import "../HomeComponents/TaxTotalIndex.css";
import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../redux/cart/cartSelectors";

const TotalTaxIndex = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  useEffect(() => {}, [products]);

  return (
    <div className="main main-index" id="mainIndex">
      <div className="total-tax">
        <label>Tax:</label>
        <input disabled type="number" name="tax" id="final-tax" />

        <label>Total:</label>
        <input
          disabled
          type="number"
          name="total"
          id="total"
          placeholder={productsTotalPrice}
        />
      </div>
    </div>
  );
};
export default TotalTaxIndex;
