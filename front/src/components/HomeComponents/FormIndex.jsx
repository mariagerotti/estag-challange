import axios from "axios";
import { useState, useEffect } from "react";
import "../HomeComponents/FormIndex.css";

const FormIndex = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState("");
  const [price, setPrice] = useState("");

  async function changeTaxPrice() {
    const teste = products.find((prod) => prod.code == product)
    if (teste) {
      setTax(teste.tax);
      setPrice(teste.price);
    }
  }

  useEffect(() => {
    changeTaxPrice();
  }, [product]);

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

  const postarProd = async (e) => {
    e.preventDefault();
    let formProduct = new FormData();
    const data = {
      product_code: product,
      amount: amount,
      tax: tax,
      price: price,
    };
    // formProduct.append("order_code", parseInt(code));

    formProduct.append("product_code", product);
    formProduct.append("amount", amount);
    formProduct.append("price", price);
    formProduct.append("tax", tax);
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost/routes/order.php",
        formProduct
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main main-index" id="mainIndex">
      <div className="half add-products" id="addProduct">
        <form
          className="amount-tax-price"
          id="formIndex"
          required
          onSubmit={(e) => {
            e.preventDefault();
            postarProd(e);
          }}
        >
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
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <input
            disabled
            placeholder="Tax"
            type="number"
            name="tax"
            id="tax"
            value={tax}
            onChange={(e) => {
              setTax(e.target.value);
            }}
          />

          <input
            disabled
            placeholder="Price"
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
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
