import axios from "axios";
import { useState, useEffect } from "react";
import "../HomeComponents/FormIndex.css";

const FormIndex = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost/routes/products.php");
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="main main-index" id="mainIndex">
      <div className="half add-products" id="addProduct">
        <form className="amount-tax-price" id="formIndex" required>
          <select
            id="productName"
            name="name"
            data-index="new"
            required
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          >
            <option hidden>Select a Product</option>
            {products?.map((prod) => (
              <option key={prod.code} value={prod.code}>
                {prod.name}
              </option>
            ))}
          </select>

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
