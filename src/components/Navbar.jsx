import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 1. Logo Section */}
      <div className="navbar-logo">
        <Link to="/">
          <h2>MiniAmazon</h2>
        </Link>
      </div>

      {/* 2. Search Bar Section */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* 3. Links Section */}
      <div className="navbar-links">
        <Link to="/cart" className="nav-link">
          <span>Cart</span>
          <span className="cart-count">0</span>
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;