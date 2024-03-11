const TableHistory = () => {
  return (
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
  );
};
export default TableHistory;
