import DeleteButton from '.././DeleteButton/DeleteButton';

import axios from '../../lib/axios';

const TrProducts = ({ code, product, price, amount, category }) => {
  const deleteProduct = async (code) => {

    // deleta da api

  };

  return (
    <tr>
      <td>{code}</td>
      <td>{product}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{category}</td>
      <td>
        <DeleteButton onclick={deleteProduct} />
      </td>
    </tr>
  );
};

export default TrProducts;
