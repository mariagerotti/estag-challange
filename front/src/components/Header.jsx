import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { UseSelector, useDispatch } from 'react-redux';

const Header = () => {
  // const {currentUser} = useSelector(rootReducer=>rootReducer.userReducer);
  // const dispatch = useDispatch();

  // const handleLoginCLick = () => {
  //   dispatch({
  //     type: "user/login",
  //     payload: { name: "maria", email: "maria@top.com" },
  //   });
  // };
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
        {/* <Link to="/login" onClick={handleLoginCLick}></Link> */}
      </div>
    </div>
  );
};

export default Header;
