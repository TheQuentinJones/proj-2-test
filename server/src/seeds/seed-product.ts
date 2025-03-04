import {Products} from '../models/index.js';

export const seedProducts = async () => {
  await Products.bulkCreate([
    {  product_name: 'Computer Science Coffee Mug ', product_description: 'C++ Programmer Coder Gift, 11 oz,', product_price: 18, product_image_file: './product-images/code_coffee_mug.jpg' , product_stock: 10 },
    {  product_name: 'What Part T-shirt', product_description: 'Computer Programmer T-shirt', product_price: 16.99, product_image_file: './product-images/dont_understand_tshirt.jpg', product_stock: 20 },
  ],
  { individualHooks: true }
  );
  };