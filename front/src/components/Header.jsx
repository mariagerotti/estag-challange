import '../styles/Header.css';
import { Link } from 'react-router-dom';
// import { loginUser, logoutUser } from "../redux/user/actions";
// import { UseSelector, useDispatch } from 'react-redux';

const Header = () => {
  // const {currentUser} = useSelector(rootReducer=>rootReducer.userReducer);
  // const dispatch = useDispatch();

  // const handleLoginCLick = () => {
  //   dispatch((loginUser({ name: "maria", email: "maria@top.com"})));
  // };

  // const handleLogoutCLick = () => {
  //   // dispatch();
  // }

  return (
    <div className='container__header'>
      
      <div className='header__title'>
        <div className='header__logo'>
          <span>Suite</span>
          <span>Store</span>
        </div>
      </div>

      <nav className='header__nav'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/history'>History</Link>
      </nav>
    </div>
  );
};

export default Header;
