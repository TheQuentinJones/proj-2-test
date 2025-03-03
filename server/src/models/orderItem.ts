import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import sequelize from './../src/config/database';
import  Order  from './order'; 
import { Product } from '../models/product';

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

// Method to create an OrderItem and update stock
static async createOrderItem(order_id: number, product_id: number, quantity: number): Promise<OrderItem | null> {
  const product = await Product.findByPk(product_id);
  if (!product || product.product_stock < quantity) {
    return null; // Not enough stock
  }
  product.product_stock -= quantity;
  await product.save();
  return OrderItem.create({ order_id, product_id, quantity });
}
 
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
        references: {
          model: Order,
          key: 'order_id',
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Product,
          key: 'product_id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      },
         
    {
      sequelize,
     
      tableName: 'Order_Item',
     
      timestamps: true,
    }
  );
  OrderItem.belongsTo(Order, {
    foreignKey: 'order_id'});
  OrderItem.belongsTo(Product, {
    foreignKey: 'product_id'});  
  Order.hasMany(OrderItem, {
    foreignKey: 'order_id',});
  Product.hasMany(OrderItem, {    
    foreignKey: 'product_id',});

  return OrderItem;
}
export default OrderItem;