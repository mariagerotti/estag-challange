const FormProducts = () => {
  return (
    <form class="inputs-products" id="inputsProducts">
      <input
        placeholder="Product Name"
        type="text"
        name="name"
        id="nameProductsProd"
        data-index="new"
      />

      <input
        placeholder="Amount"
        type="number"
        name="amount"
        id="amountProducts"
        min="1"
        step="1"
      />

      <input
        placeholder="$ Unit Price"
        type="number"
        name="price"
        id="unitPriceProducts"
        min="1"
        step="0.01"
      />

      <select name="category_code" id="categoryProducts"></select>

      <button onclick="postProducts()">Add Product</button>
    </form>
  );
};
export default FormProducts;
