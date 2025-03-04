import { OrderItem } from '../models/index.js';

export const seedOrderItem = async () => {
   await OrderItem.bulkCreate([
     {  order_id: 1, product_id: 1, quantity: 1 },
     {  order_id: 2, product_id: 2, quantity: 2 },
   ],
   { individualHooks: true }
   );
};