import TrProducts from "./TrProducts";
import axios from "axios";
import { useState, useEffect } from "react";

const TableProducts = () => {
  const [products, setProducts] = useState([]);

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
    <div className="main main-products">
      <div className="table-products">
        <table id="tableProducts">
          <thead>
            <tr>
              <th>Code</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>

          <tbody id="tbodyProducts">
            {products?.map((product) => (
              <TrProducts
                key={product.code}
                code={product.code}
                product={product.name}
                price={product.price}
                amount={product.amount}
                category={product.category_code}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProducts;
