const TableCategories = () => {
  return (
    <div className="main main-categories">
      <div className="table-categories">
        <table id="tableCategories">
          <thead>
            <tr>
              <th>Code</th>
              <th>Category</th>
              <th>Tax</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="tbodyCategories"></tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCategories;
