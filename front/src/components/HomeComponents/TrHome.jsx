const TrHome = ({ code, name, amount, price, category, total }) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{total}</td>
    </tr>
  );
};


export default TrHome;
