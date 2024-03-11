import Header from "../components/Header";
import FormCategories from "../components/CategoriesComponents/FormCategories.jsx"
import TableCategories from "../components/CategoriesComponents/TableCategories.jsx"


const Categories = () => {
  return (
    <div className="categories-component">
      <Header/>
      <FormCategories />
      <TableCategories />
    </div>
  )
};

export default Categories;
