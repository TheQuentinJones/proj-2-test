import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/index.css'
import Login from './components/Login/Login.tsx';
import Home from './components/Home/Home.tsx';
// import ItemDetails from './components/itemDetails.tsx';
import Cart from './components/Cart/Cart.tsx';
import { CartProvider } from './components/Cart/CartContext.tsx';
import LoginSignup from './components/Pages/LoginSignup.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<LoginSignup />} />
           {/* <Route path="/item/:id" element={<ItemDetails />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>,
);
