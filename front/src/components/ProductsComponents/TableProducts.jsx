import DeleteButton from "../DeleteButton/DeleteButton";

const TableProducts = ({ products, deleteProduct }) => {


  console.log(products);
  return (
    <div className="main main-products">
      <div className="table-products">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product) => (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
                <td>{product.categoryname}</td>
                <td>
                  <DeleteButton onclick={() => deleteProduct(product.code)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProducts;
