import {Order} from '../models/index.js';

export const seedOrder = async () => {
  await Order.bulkCreate([
    {  customer_id: 1, total_amount: 100 },
    {  customer_id: 2, total_amount: 200 },
    {  customer_id: 3, total_amount: 300 },
 
],
{ individualHooks: true }
);
};
