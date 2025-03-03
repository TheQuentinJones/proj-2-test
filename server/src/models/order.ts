import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Customer } from './customer.js';
import { OrderItem } from '../models/orderItem.js';
import {Product} from '../models/product.js';


interface OrderAttributes {
  order_id: number;
  customer_id: number;
  total_amount:  number;
 
  
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'order_id'> {}

class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
  public order_id!: number;
  public customer_id!: number;
  public total_amount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function OrderFactory(sequelize: Sequelize): typeof Order {
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Customer,  
          key: 'customer_id',
      },
      },
      total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      
    },
    {
      sequelize,
     
      tableName: 'Order',
     
      timestamps: true,
      
    }
  );
  Order.hasMany(OrderItem, {
    foreignKey: 'order_id'});
  OrderItem.belongsTo(Order, {
    foreignKey: 'order_id'});  
  return Order;
}
export default  Order ;