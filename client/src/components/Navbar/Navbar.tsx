
import React from 'react';

//import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./Nav.css"
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'


const Navbar :React.FC= () => {


  return(
<div className='Navbar'> 
  <div className="nav-logo">  
    <img src={logo} alt="" style={{width:'60px', height:'auto'}}/>
    {<p> Dev Merch </p> } 
  </div>

  <ul className="nav-menu">
  
  <li> Shop <hr/> </li> 
  <li>T-shirts</li>
  <li>Accessories</li>
  <li> About</li>
  </ul>

  <div className="nav-login-cart">
    <button>login </button>
    <img src={cart} alt="Cart" className="Cart-icon" style={{width:'30px',height:'auto'}} />
</div>
   
</div>
  );
};

export default Navbar