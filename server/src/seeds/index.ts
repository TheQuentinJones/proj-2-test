import { seedUsers } from './user-seeds.js';
import { seedCustomer } from './seed-customer.js';
import { seedOrder } from './seed-order.js';
import { seedOrderItem } from './seed-orderItem.js';
import { seedProducts } from './seed-product.js';
import sequelize from '../config/connection.js';

export const seedAll = async (): Promise<void> => {
  console.log('\n----- HOWDY THERE DATABASE -----\n');
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedCustomer();
    console.log('\n----- CUSTOMER SEEDED -----\n');
    await seedOrder();
    console.log('\n----- ORDER SEEDED -----\n');
    await seedOrderItem();
    console.log('\n----- ORDERITEM SEEDED -----\n');
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

 seedAll();
