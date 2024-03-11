const TableIndex = () => {
    return (

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

    <div className="total-tax">
      <label>Tax:</label>
      <input disabled type="number" name="tax" id="final-tax" />

      <label>Total:</label>
      <input disabled type="number" name="total" id="total" />
    </div>

    <div className="finish-add">
      <button className="primary-button" id="cancel">
        Cancel
      </button>
      <button className="finish-button" id="finish-button">
        Finish
      </button>
    </div>
  </div>
    )
};

export default TableIndex;
