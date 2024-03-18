import { useSelector } from 'react-redux';

import TrHome from './TrHome';

const TableIndex = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Category</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <TrHome key={product.code} product={product} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default TableIndex;
