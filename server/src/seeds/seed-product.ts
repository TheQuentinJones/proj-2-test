import {Products} from '../models/index.js';

export const seedProducts = async () => {
  await Products.bulkCreate([
    {  product_name: 'Computer Science Cap', product_description: 'Black code cap', product_price: 15, product_image_file: '../../assets/images/Cap 1.jpg' , product_stock: 10 },
    {  product_name: 'Water bottle', product_description: 'Silver code water bottle', product_price: 17, product_image_file: '../../assets/images/Bottle 1.jpeg ', product_stock: 10 },
    {  product_name: 'Water bottle', product_description: 'Python code water bottle', product_price: 20, product_image_file: '../../assets/images/Bottle 2.webp ', product_stock: 15 },
    {  product_name: 'Water bottle', product_description: 'Coffee code water bottle', product_price: 16, product_image_file: '../../assets/images/Bottle 3.jpg ', product_stock: 11 },
    {  product_name: 'Mug', product_description: 'Debugging Mug', product_price: 17, product_image_file: '../../assets/images/Bottle 3.webp ', product_stock: 5 },
    {  product_name: 'Water bottle', product_description: 'Gray programmer water bottle', product_price: 15, product_image_file: '../../assets/images/Bottle 4 .jpg ', product_stock: 12 },
    {  product_name: 'Cap', product_description: 'Brown code cap', product_price: 12, product_image_file: '../../assets/images/Cap 2.jpg ', product_stock: 10 },
    {  product_name: 'Cap', product_description: 'Black IT works cap', product_price: 15, product_image_file: '../../assets/images/Cap 3.jpg', product_stock: 14 },
    {  product_name: 'T-shirt', product_description: 'Black algorithmn code t-shirt', product_price: 22, product_image_file: '../../assets/images/coder_life_shirt.jpeg ', product_stock: 25 },
    {  product_name: 'Mug', product_description: 'Black Programmer Mug', product_price: 15, product_image_file: '../../assets/images/Mug 2.webp ', product_stock: 10 },
    {  product_name: 'Mug', product_description: 'White debugging mug', product_price: 16, product_image_file: '../../assets/images/mug.webp ', product_stock: 15 },
    {  product_name: 'T-shirt', product_description: 'Black programmer t-shirt', product_price: 20, product_image_file: '../../assets/images/Programmer-TShirt.jpg ', product_stock: 20 },
  ],
  { individualHooks: true }
  );
  };
 