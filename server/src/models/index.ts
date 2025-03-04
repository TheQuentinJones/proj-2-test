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

Order.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE'
});
Order.belongsToMany(Products, {
  through: OrderItem,
  foreignKey: 'product_id'
});
Products.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: 'product_id'
});

Customer.hasMany(Order, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id'
});



export { User, Order, OrderItem, Customer, Products };
