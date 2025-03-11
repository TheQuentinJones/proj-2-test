import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { useCart } from '../Cart/CartContext';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
        <p>Dev Gear Hub</p>
      </div>
      <ul className="nav-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
       
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
      
      
    
        <div style={{ position: 'relative' }}>
          <Link to="/cart"><img src={cart} alt="Cart" className="cart-icon" /></Link>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;