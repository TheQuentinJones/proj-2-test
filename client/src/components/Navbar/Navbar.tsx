import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
        <p>Dev Merch</p>
      </div>
      <ul className="nav-menu">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <img src={cart} alt="Cart" className="cart-icon" />
      </div>
    </div>
  );
};

export default Navbar;