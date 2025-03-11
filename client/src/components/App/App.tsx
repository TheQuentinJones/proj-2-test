import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'; 
import { CartProvider } from '../Cart/CartContext';
import Login from '../Login/Login';
import ItemDetails from '../itemDetails';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';


const App: React.FC = () => {
  return (
    <div> 
      <Navbar/>
       <CartProvider>
       <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetails />} />
           
           
          </Routes>
        </Router>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;