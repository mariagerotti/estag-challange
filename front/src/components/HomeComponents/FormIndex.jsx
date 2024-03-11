import "../HomeComponents/FormIndex.css";

const FormIndex = () => {
  return (
    <div class="main main-index" id="mainIndex">
      <div class="half add-products" id="addProduct">

      <form className="amount-tax-price" id="formIndex" required>
        <select id="productName" name="name" data-index="new" required></select>
        <input
          required
          placeholder="Amount"
          type="number"
          name="amount"
          id="amount"
          min="1"
        />
        <input disabled placeholder="Tax" type="number" name="tax" id="tax" />
        <input
          disabled
          placeholder="Price"
          type="number"
          name="price"
          id="price"
        />
        <input
          className="secundary-button"
          id="buttonCreateProduct"
          type="submit"
          value="Add Product"
        ></input>
      </form>
      </div>
    </div>
  );
};

export default FormIndex;
