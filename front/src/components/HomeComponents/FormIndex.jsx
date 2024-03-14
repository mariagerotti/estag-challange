import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import "../HomeComponents/FormIndex.css";

const FormIndex = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState("");
  const [price, setPrice] = useState("");



  async function changeTaxPrice() {
    const teste = products.find((prod) => prod.code == product);
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
  const dispatch = useDispatch();
const handleProductClick = () => {
    dispatch(
      addProductToCart({
        name: product,
        amount: amount,
        tax: tax,
        price: price,
      })
    );
  };
  const executa2func = (e) => {
    e.preventDefault();
  handleProductClick();
  }
  return (
    <div className="main main-index" id="mainIndex">
      <div className="half add-products" id="addProduct">
        <form
          className="amount-tax-price"
          id="formIndex"
          required
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   postarProd(e);
          // }}
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
            onClick={executa2func}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default FormIndex;
