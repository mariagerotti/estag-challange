const TrProducts = (code, product, price, amount, category) => {
  return (
    
      <tr>
        <td>{code}</td>
        <td>{product}</td>
        <td>{price}</td>
        <td>{amount}</td>
        <td>{category}</td>
      </tr>
 
  );
};

export default TrProducts;
