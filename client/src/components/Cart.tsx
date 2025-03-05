import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <img src={item.imageUrl} alt={item.title} style={{ width: '100%' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default Cart;