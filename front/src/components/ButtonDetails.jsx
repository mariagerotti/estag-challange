import { Link } from "react-router-dom";
//  props passada
const ButtonDetails = ({orderCode}) => {
  
  return (
    <Link  >
      <button className="secundary-button" onClick={orderCode}>View Details</button>
    </Link>
  );
};
export default ButtonDetails;
// to={`/viewDetails/${orderCode}`}