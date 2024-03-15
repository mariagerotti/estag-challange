import { Link } from "react-router-dom";
// {orderCode} props passada
const ButtonDetails = () => {
  
  return (
    <Link  >
      <button className="secundary-button">View Details</button>
    </Link>
  );
};
export default ButtonDetails;
// to={`/viewDetails/${orderCode}`}