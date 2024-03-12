import TrProducts from "./TrProducts";
import axios from "axios";
import { useState, useEffect } from "react";

const TableProducts = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  

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

          <tbody id="tbodyProducts"></tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProducts;
