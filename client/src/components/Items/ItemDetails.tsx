import React from 'react';
import { useParams, Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: 'Item 1',
    description: 'This is a brief description of item 1.',
    imageUrl: 'https://via.placeholder.com/150',
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
  // ... other items
];

const ItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string |undefined}>();
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