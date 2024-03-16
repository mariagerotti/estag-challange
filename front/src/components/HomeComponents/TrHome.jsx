import DeleteButton from '../DeleteButton/DeleteButton';

const TrHome = ({ product }) => {
  const total = product.price * product.amount;

  const deleteProduct = async (code) => {
    // remove o item do redux
  };

  return (
    <tr className='table_row'>
      <td>{product.code}</td>
      <td>{product.name}</td>
      <td>{product.amount}</td>
      <td>{product.price}</td>
      <td>{product.categoryName}</td>
      <td>{total}</td>
      <td>
        <DeleteButton onclick={() => deleteProduct(product.code)} />
      </td>
    </tr>
  );
};

export default TrHome;
