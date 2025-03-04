import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
// import { Order } from './order'; 
// import { Product } from './product';
//import bcrypt from 'bcrypt';

interface OrderItemAttributes {
  order_item_id: number;
  order_id: number;
  product_id:  number;
  quantity: number; 
}

interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, 'order_item_id'> {}

export class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
  public order_item_id!: number;
  public order_id!: number;
  public product_id!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

 
}
 
 


export function OrderItemFactory(sequelize: Sequelize): typeof OrderItem {
  OrderItem.init(
    {
      order_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
       
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
       
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'order_item',
      sequelize,
    }
  );

  return OrderItem;
}
 