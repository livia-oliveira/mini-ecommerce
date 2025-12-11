import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
import { Order } from "./Order";
import { Product } from "./Product";

export class OrderItem extends Model{
    declare id: number;
    declare orderId: number;
    declare productId: number;
    declare quantity: number;
    declare price: number;
}

OrderItem.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
    },

    {
        sequelize,
        tableName: "order_items",
        timestamps: true,
    }
);
