import React, { useMemo } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
// import { loginUser, logoutUser } from "../redux/user/actions";
// import { useSelector } from "react-redux";
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

  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  // const total = products.reduce((acc, prod) => acc + prod.amount, 0);
  // const productsCount = useMemo(() => {
  //   return products.reduce((acc, prod) => acc + prod.amount, 0);
  // }, [products]);

  return (
    <div className="container__header">
      <div className="header__title">
        <div className="header__logo">
          <span>Suite</span>
          <span>Store</span>
        </div>
      </div>

      <div className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/history">History</Link>
        {/* {currentUser ? (
          <div onClick={handleLogoutCLick}>sair</div>)
          : (
           
        <Link to="/login" onClick={handleLoginCLick}></Link> 
          )} */}
      </div>
    </div>
  );
};

export default Header;
