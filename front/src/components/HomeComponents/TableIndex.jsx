import "../HomeComponents/TableIndex.css";

const TableIndex = () => {
  return (
    <div className="main main-index" id="mainIndex">
      <div className="half info-products">
        <div className="table-index">
          <table id="tableIndex">
            <thead>
              <tr>
                <th>code</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Category Code</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbodyCart"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableIndex;
