import DeleteButton from "../DeleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import { deleteProductFromCart } from "../../redux/cart/actions";

const TrHome = ({ product }) => {
  const total = product.price * product.amount;

  const dispatch = useDispatch();

  const deleteProductButton = async (code) => {
    dispatch(deleteProductFromCart(code));
  };

  return (
    <>
      <tr key={product.code}>
        <td>{product.code}</td>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.price}</td>
        <td>{product.categoryName}</td>
        <td>{total}</td>
        <td>
          <DeleteButton onclick={() => deleteProductButton(product.code)} />
        </td>
      </tr>
    </>
  );
};

export default TrHome;
