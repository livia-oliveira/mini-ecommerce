import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";

export class Order extends Model{
    declare id: number;
    declare total: number;
    declare status: "pending" | "paid" | "shipped" | "completed" | "cancelled";
    declare createdAt: Date;
    declare updatedAt: Date;
}

Order.init(
    {
        id:{
            
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        total:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            defaultValue: 0
        },
        status:{
            type: DataTypes.ENUM("pending", "paid", "shipped", "completed", "cancelled"),
            defaultValue: "pending",
            allowNull:false,

        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt:{
            type:DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'orders',
        timestamps: true,
    }
);
