import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
//import bcrypt from 'bcrypt';
 
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
   
      tableName: 'customer',
      sequelize,
      
    }
    );
 
  return Customer;
}
 
