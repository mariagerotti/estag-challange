import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
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
        </div>
      </div>
    )
}

export default Header;