
import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import Navbar from '../Navbar/Navbar'; // Ensure that the Navbar component exists in the correct directory
import Footer from '../Footer/Footer';

import IMG1 from '../assets/images/Bottle1.jpeg';
import IMG2 from '../assets/images/coder_life_shirt.jpeg';
import IMG3 from '../assets/images/mug.webp';
import IMG4 from '../assets/images/Cap1.jpg';
import IMG5 from '../assets/images/Mug2.webp';
import IMG6 from '../assets/images/Cap3.jpg';

const items = [
  {
    id: 1,
    title: 'Bottle',
    description: '',
    imageUrl: IMG1,
  },
  {
    id: 2,
    title: 'Coder T-shirt',
    description: '',
    imageUrl: IMG2,
  },
  {
    id: 3,
    title: 'Coffee Mug',
    description: '.',
    imageUrl: IMG3,
  },
  {
    id: 4,
    title: 'Cap',
    description: '.',
    imageUrl: IMG4,
  },
  {
    id: 5,
    title: 'Mug for Nerds',
    description: '.',
    imageUrl: IMG5,
  },
  {
    id: 6,
    title: 'Cap for Coders',
    description: '.',
    imageUrl: IMG6,
  },
  // Add more items here
];

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Navbar />
      <h1 className="center-text">Feature products</h1>
      <div className="top-right-container"> {/* Added container for Logout and View Cart */}
        <button onClick={handleLogout}>Logout</button>
       
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item) => (
          <div key={item.id} className="item" style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '100%', marginBottom: '10px' }} />
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
      <Footer />
    </div>
  );
};

export default Home;