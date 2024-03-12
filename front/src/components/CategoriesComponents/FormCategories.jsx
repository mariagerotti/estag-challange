import React from "react";
import { useState } from "react";
import axios from "axios";
import "./FormCategories.css";

const FormCategories = () => {
  const [name, setName] = useState("");
  const [tax, setTax] = useState("");

  const postarCateg = async (e) => {
    e.preventDefault();
    let form = new FormData();
    const data = {
      name: name,
      tax: tax,
    };
    form.append("name", name);
    form.append("tax", tax);
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost/routes/category.php",
        form
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main main-categories">
      <form
        className="inputs-categories"
        id="inputsCategories"
        onSubmit={(e) => {
          e.preventDefault();
          postarCateg(e);
        }}
      >
        <input
          placeholder="Category Name"
          type="text"
          name="name"
          id="nameCategories"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          placeholder="$ Tax"
          type="number"
          name="tax"
          id="taxCategories"
          step="any"
          min="0.01"
          onChange={(e) => {
            setTax(e.target.value);
          }}
        />
        <button onClick="postarCateg()">Add Category</button>
      </form>
    </div>
  );
};

export default FormCategories;
