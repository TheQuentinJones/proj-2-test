import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
//import { Customer } from './customer';
//import bcrypt from 'bcrypt';


interface OrderAttributes {
  order_id: number;
  customer_id: number;
  total_amount:  number;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'order_id'> {}

export class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
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
      },
      total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: 'order',
      sequelize,
    }
  );
  
  return Order;
}