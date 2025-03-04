import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Login.tsx';
import Home from './Home.tsx';
import ItemDetails from './ItemDetails.tsx';
import Cart from './Cart.tsx';
import { CartProvider } from './CartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  </StrictMode>,
);
