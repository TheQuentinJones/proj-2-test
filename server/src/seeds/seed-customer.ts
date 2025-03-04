import {Customer} from '../models/index.js';

export const seedCustomer = async () => {
  await Customer.bulkCreate([
    { customer_name: 'John Doe', customer_email: 'john@example.com', customer_password: 'hashedpassword123' },
    { customer_name: 'Jane Smith',customer_email: 'jane@example.com', customer_password: 'hashedpassword456' },
    { customer_name: 'Alice Johnson', customer_email: 'alice@example.com', customer_password: 'hashedpassword789'},
  ],
  { individualHooks: true }
  );
  };