import { Request, Response } from "express";
import { OrderItem } from "../models/orderItem";
import { Product } from "../models/Product";
import { Order } from "../models/Order";

class OrderItemController{
    
    static async create(req: Request, res:Response){
        try{
            const { orderId, productId, quantity } = req.body;

            if(!orderId || !productId || !quantity){
                return res.status(400).json({ message: "orderId, productId and quantity are required" })
            }

            const order = await Order.findByPk(orderId);
            const product = await Product.findByPk(productId);

            if(!order){
                return res.status(404).json({ message: "Pedido não encontrado" });
            }

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            const price = product.price;

            const item = await OrderItem.create({
                orderId,
                productId,
                quantity,
                price
            });

            return res.status(201).json(item);
        } catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao criar item pedido" });
        }
    }

    static async index(req: Request, res: Response){
        try{
            const items = await OrderItem.findAll({
                include: [Product, Order]
            });

            return res.json(items)

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao listar Itens do pedido" })
        }
    } 

    static async delete(req: Request, res: Response){
        try{
            const { id } = req.params;

            const item = await OrderItem.findByPk(id);

            if(!item){
                return res.status(404).json({ message: "Item não encontrado" });
            }

            await item.destroy();

            return res.json({ message: "Item deletado com sucesso" });
        } catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao deletar item" });
        }
    }
}

export default OrderItemController;