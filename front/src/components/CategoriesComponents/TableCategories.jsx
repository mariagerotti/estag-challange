// import Categories from "../../pages/Categories";
import Tr from "./TrComponents";
import axios from "axios";
import { useState, useEffect } from "react";

const TableCategories = ( ) => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [tax, setTax] = useState("");

  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost/routes/category.php");
      const data = res.data;

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, categories);
  return (
    <div className="main main-categories">
      <div className="table-categories">
        <table id="tableCategories">
          <thead>
            <tr>
              <th>Code</th>
              <th>Category</th>
              <th>Tax</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tbodyCategories">
            {categories?.map((category) => (
              <Tr code={category.code} name={category.name} tax={category.tax} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCategories;
