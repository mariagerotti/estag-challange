const FormCategories = () => {
  return (
    <form class="inputs-categories" id="inputsCategories" method="post">
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
  );
};

export default FormCategories;
