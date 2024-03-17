import { useEffect, useState } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import axios from '../../lib/axios';
// import DeleteCategories from "./DeleteCategories";

const TrCategories = ({ code, name, tax }) => {
  const [categories, setCategories] = useState([]);

  const deleteCategory = async (code) => {
    const getCategories = async () => {
      try {
        const res = await axios.get('/routes/category.php');
        const data = res.data;

        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    try {
      const res = await axios.delete(`/routes/category.php?code=${code}`);
      await getCategories();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{tax}</td>
      <td>
        <DeleteButton onclick={() => deleteCategory(code)} />
      </td>
    </tr>
  );
};

export default TrCategories;
