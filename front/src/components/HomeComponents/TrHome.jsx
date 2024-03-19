import DeleteButton from "../DeleteButton/DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart } from "../../redux/cart/actions";

const TrHome = ({ product }) => {
  const total = product.price * product.amount;

  const dispatch = useDispatch();
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);


  console.table(products);
  const deleteProductButton = async (code) => {
    dispatch(deleteProductFromCart(code));
  };

  return (
    <>
      {products.map((product) => (
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
      ))}
    </>
  );
};

export default TrHome;
