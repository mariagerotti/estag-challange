import axios from "axios";
import { useState } from "react";

import "../ProductsComponents/FormProducts.css";

const FormProducts = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);

  const postarProd = async (e) => {
    e.preventDefault();
    let formProduct = new FormData();
    const data = {
      name: name,
      amount: amount,
      price: price,
      category: category,
    };
    formProduct.append("name", name);
    formProduct.append("amount", amount);
    formProduct.append("price", price);
    formProduct.append("category", category);
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost/routes/products.php",
        formProduct
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main main-products">
      <form
        className="inputs-products"
        id="inputsProducts"
        onSubmit={(e) => {
          e.preventDefault();
          postarProd(e);
        }}
      >
        <input
          placeholder="Product Name"
          type="text"
          name="name"
          id="nameProductsProd"
          data-index="new"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          placeholder="Amount"
          type="number"
          name="amount"
          id="amountProducts"
          min="1"
          step="1"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <input
          placeholder="$ Unit Price"
          type="number"
          name="price"
          id="unitPriceProducts"
          min="1"
          step="0.01"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <select
          name="category_code"
          id="categoryProducts"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >

          <option hidden>Select Category</option>
          {category.map((cat) => (
            <option key={cat.code} value={cat.code}>
              {cat.name}
            </option>
          ))}
   
        </select>

        <button>Add Product</button>
      </form>
    </div>
  );
};
export default FormProducts;
