
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Home from './Home/Home';
import ItemDetails from './itemDetails'; // Ensure correct import path
import Cart from './Cart/Cart'; // Ensure correct import path
import { CartProvider } from './Cart/CartContext'; 

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;