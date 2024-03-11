import React from "react";
import './FormCategories.css'
 
const FormCategories = () => {
  return (

    <div className="main main-categories">
    <form className="inputs-categories" id="inputsCategories" method="post">
      <input
        placeholder="Category Name"
        type="text"
        name="name"
        id="nameCategories"
      />

      <input
        placeholder="$ Tax"
        type="number"
        name="tax"
        id="taxCategories"
        step="any"
        min="0.01"
      />
      <button onclick="postarCateg()">Add Category</button>
    </form>
    </div>
  );
};

export default FormCategories;
