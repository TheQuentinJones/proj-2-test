import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import items from '../items'; // Correct import path
import '../index.css';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to homepage</h1>
      <p>This is the homepage after logging in.</p>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/cart">View Cart</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>View Details</Link>
            <button onClick={() => {
              console.log('adding item:', item);
              addToCart(item);
            }}> Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;