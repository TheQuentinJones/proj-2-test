import React from 'react';
import { useParams, Link } from 'react-router-dom';

import IMG1 from './Assets/Bottle1.jpeg';
import IMG2 from './Assets/Bottle2.webp';
import IMG3 from './Assets/Bottle3.jpg';
import IMG4 from './Assets/Bottle4.jpg';


const items = [
  {
    id: 1,
    title: 'Bottle',
    description: 'A flask water bottle, preferably an insulated bottle.',
    imageUrl: IMG1, // Changed to imageUrl
  },
  {
    id: 2,
    title: 'Bottle',
    description: 'A flask water bottle, preferably an insulated bottle.',
    imageUrl: IMG2,
  },
  {
    id: 3,
    title: 'Bottle',
    description: 'A flask water bottle, preferably an insulated bottle.',
    imageUrl: IMG3,
  },
  {
    id: 4,
    title: 'Bottle',
    description: 'A flask water bottle, preferably an insulated bottle.',
    imageUrl: IMG4,
  },
];

  // ... other items



const ItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find(item => item.id === parseInt(id || ''));


  if (!item) {
    return <div>Item not found</div>;
  }


  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt={item.title} style={{ width: '300px' }} />
      <p>{item.description}</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};


export default ItemDetails;