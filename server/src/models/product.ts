import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import sequelize from '../src/config/database';
import { OrderItem } from './orderItem';


interface ProductAttributes {
  product_id: number;
  product_name: string;
  product_description: string;
  product_price:  number;
  product_image_file: string;
  product_stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'product_id'> {}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public product_id!: number;
  public product_name!: string;
  public product_description!: string;
  public product_price!:  number;
  public product_image_file!: string;
  public product_stock!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}
export function ProductFactory(sequelize: Sequelize): typeof Product {
Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_description: {
        type: DataTypes.TEXT,
        allowNull : false,
      },
      product_price: {
          type: DataTypes.FLOAT,
          allowNull: false, 
      },
      product_image_file: {
         allowNull: false,
          type: DataTypes.STRING,
    
      },
      product_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, 
      },
    }, 
    {
      sequelize,
      // Manually define the table name
      tableName: 'product',
    
      timestamps: true,
     
    }
  );
  Product.hasMany(OrderItem, {

    foreignKey: 'product_id'});
  OrderItem.belongsTo(Product, {
    foreignKey: 'product_id'});  
  return Product;
}
export default Product;
