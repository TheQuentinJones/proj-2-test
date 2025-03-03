import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { OrderFactory } from './order.js';
import { OrderItemFactory } from './orderItem.js';
import { CustomerFactory } from './customer.js';
import { ProductFactory } from './product.js';

const User = UserFactory(sequelize);
const Order = OrderFactory(sequelize);
const OrderItem = OrderItemFactory(sequelize);
const Customer = CustomerFactory(sequelize);
const Products = ProductFactory(sequelize);

export { User, Order, OrderItem, Customer, Products };
