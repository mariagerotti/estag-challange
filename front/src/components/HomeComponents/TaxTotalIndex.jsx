import "../HomeComponents/TaxTotalIndex.css";

const TotalTaxIndex = () => {
  return (
    <div className="main main-index" id="mainIndex">
      <div className="total-tax">
        <label>Tax:</label>
        <input disabled type="number" name="tax" id="final-tax" />

        <label>Total:</label>
        <input disabled type="number" name="total" id="total" />
      </div>
    </div>
  );
};
export default TotalTaxIndex;
