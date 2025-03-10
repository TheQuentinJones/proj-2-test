import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import IMG from './Components/Assets/Bottle 1.jpeg';

const items = [
  {
    id: 1,
    title: 'Item 1',
    description: 'This is a brief description of item 1.',
    imageUrl: IMG,
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'This is a brief description of item 2.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more items here
  {
    id: 3,
    title: 'Item 3',
    description: 'This is a brief description of item 3.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Item 4',
    description: 'This is a brief description of item 4.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Item 5',
    description: 'This is a brief description of item 5.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Item 6',
    description: 'This is a brief description of item 6.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Item 7',
    description: 'This is a brief description of item 7.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Item 8',
    description: 'This is a brief description of item 8.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Item 9',
    description: 'This is a brief description of item 9.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    title: 'Item 10',
    description: 'This is a brief description of item 10.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    title: 'Item 11',
    description: 'This is a brief description of item 11.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    title: 'Item 12',
    description: 'This is a brief description of item 12.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    navigate('/login');
  };


  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage after logging in.</p>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/cart">View Cart</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <div key={item.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '100%' }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>View Details</Link>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;