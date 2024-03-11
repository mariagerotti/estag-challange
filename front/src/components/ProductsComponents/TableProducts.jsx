const TableProducts = () => {
  return (
    <div className="table-products">
      <table id="tableProducts">
        <thead>
          <tr>
            <th>Code</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>

        <tbody id="tbodyProducts"></tbody>
      </table>
    </div>
  );
};

export default TableProducts;
