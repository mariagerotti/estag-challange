import "../HomeComponents/TableIndex.css";
import TrHome from "./TrHome";
// import { useState } from "react";
import { useSelector } from "react-redux";

const TableIndex = () => {
  // const [cart, setCart] = useState([]);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  
  return (
    <div className="main main-index" id="mainIndex">
      <div className="half info-products">
        <div className="table-index">
          <table id="tableIndex">
            <thead>
              <tr>
                <th>code</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Category Code</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbodyCart">
              {products.map((product) => (
                <TrHome
                  key={product.code}
                  code={product.code}
                  name={product.name}
                  amount={product.amount}
                  price={product.price}
                  category={product.category}
                  total={product.total}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableIndex;
