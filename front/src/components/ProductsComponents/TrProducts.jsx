import DeleteButton from '.././DeleteButton/DeleteButton';

const TrProducts = ({ product }) => {
  return (
    <tr>
      <td>{product.code}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.amount}</td>
      <td>{product.categoryname}</td>
      <td>
        <DeleteButton onclick={() => deleteProduct(code)} />
      </td>
    </tr>
  );
};

export default TrProducts;
