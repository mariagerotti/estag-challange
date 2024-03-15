import { Link } from "react-router-dom";

const ButtonDetails = () => {
  
  return (
    <Link  to={`/viewDetails/${order.code}`}>
      <button className="secundary-button">View Details</button>
    </Link>
  );
};
export default ButtonDetails;
