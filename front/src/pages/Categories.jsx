import FormCategories from '../components/CategoriesComponents/FormCategories.jsx';
import TableCategories from '../components/CategoriesComponents/TableCategories.jsx';
import PagesTitle from '../components/PagesTitle.jsx';

const Categories = () => {
  return (
    <div className='categories-component'>
      <PagesTitle>Categories</PagesTitle>
      <FormCategories />
      <TableCategories />
    </div>
  );
};

export default Categories;
