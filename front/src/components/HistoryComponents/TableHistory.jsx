const TableHistory = () => {
  return (
    <div class="main main-history">
      <div className="table-history">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Tax</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody id="tbodyHistory"></tbody>
        </table>
        <br />
      </div>
    </div>
  );
};
export default TableHistory;
