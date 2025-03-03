import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import  Order  from '../models/order.js';  
 
interface CustomerAttributes {
  customer_id: number;
  customer_name: string;
  customer_email: string;
  customer_password: string;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'customer_id'> {}

export class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public customer_id!: number;
  public customer_name!: string;
  public customer_email!: string;
  public customer_password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
 
}

export function CustomerFactory(sequelize: Sequelize): typeof Customer {
Customer.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
     customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     customer_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
     customer_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    },
    {
      sequelize,
      tableName: 'customer',
      timestamps: true,
    }
    );
  Customer.hasMany(Order, {
    foreignKey: 'customer_id',
    as: 'orders'
  });
  Order.belongsTo(Customer, {
    foreignKey: 'customer_id',
    as: 'customer'
  });   
  return Customer;
}
export default Customer;
