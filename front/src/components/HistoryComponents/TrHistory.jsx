import { Link } from 'react-router-dom';

const TrHistory = ({ order }) => {
  return (
    <tr>
      <td>{order.code}</td>
      <td>{order.tax}</td>
      <td>{order.total}</td>
      <td>
        <Link to={`/viewDetails/${order.code}`}>Details</Link>
      </td>
    </tr>
  );
};

export default TrHistory;
