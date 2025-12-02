import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../db';

export class Product extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare price: number;
    declare stock: number;
}

Product.init(
    {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type: DataTypes.DECIMAL(10,2),
            allowNull:false,
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
        },
    },
    {
        sequelize,
        tableName: 'products',
        timestamps: true,
    }
);
