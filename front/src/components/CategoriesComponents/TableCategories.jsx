// import Categories from "../../pages/Categories";
import TrCategories from './TrCategories';
import axios from '../../lib/axios';
import { useState, useEffect } from 'react';

const TableCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get('/routes/category.php');
      const data = res.data;

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (code) => {
    try {
      await fetch(`/routes/category.php?code=${code}`, {
        method: 'DELETE'
      });
      await getCategories();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className='main main-categories'>
      <div className='table-categories'>
        <table id='tableCategories'>
          <thead>
            <tr>
              <th>Code</th>
              <th>Category</th>
              <th>Tax</th>
              <th></th>
            </tr>
          </thead>
          <tbody id='tbodyCategories'>
            {categories?.map((category) => (
              <TrCategories
                key={category.code}
                code={category.code}
                name={category.name}
                tax={category.tax}
                deleteFunction={() => {
                  deleteCategory(category.code);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCategories;
