import "../HomeComponents/FinishPurchase.css";

const FinishPurchase = () => {
  return (
    <div class="main main-index" id="mainIndex">
      <div className="finish-add">
        <button className="primary-button" id="cancel">
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
