const TrDetails = ({ order, product }) => {
  return (
    <tr>
      <td>{order.code}</td>
      <td>{product.productName}</td>
      <td>{order.amount}</td>
      <td>{product.price}</td>
      <td>{product.tax}</td>
    </tr>
  );
};

export default TrDetails;
