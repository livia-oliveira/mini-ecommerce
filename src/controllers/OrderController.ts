import { Request, Response } from "express";
import { Order } from "../models/Order";

const VALID_ORDER_STATUS = [
    "pending", 
    "paid", 
    "shipped", 
    "completed", 
    "cancelled"
] as const;

class OrderController{
    
    static async create(req: Request, res: Response){
        try{
            const { total, status } = req.body;

            if(status !== undefined && !VALID_ORDER_STATUS.includes(status)){
                return res.status(400).json({ message: `Status inválido. Valores permitidos: ${VALID_ORDER_STATUS.join(", ")}`,});
            }

            const order = await Order.create({ 
                total,
                status: status ?? "pending"});

            return res.status(201).json(order);

        } catch(error){
            console.error(error)
            return res.status(500).json({ message: "Erro ao criar pedido"});
        }
    }

    static async index(req: Request, res: Response){
        try{
            const orders = await Order.findAll();
            return res.json(orders);
        }catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao buscar pedidos"});
        }
    }

    static async show(req: Request, res: Response){
        try{
            const { id } = req.params;

            const order = await Order.findByPk(id);

            if(!order){
                return res.status(404).json({ message: "Pedido não encontrado"});
            }

            return res.json(order);

        }catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao buscar pedido" });
        }
    }

    static async update(req: Request, res: Response){
        try{
            const { id } = req.params;
            const { total, status } = req.body;

            const order = await Order.findByPk(id);

            if(!order){
                return res.status(404).json({ message: "Pedido não encontrado" });
            }

            if(status && !VALID_ORDER_STATUS.includes(status)){
                return res.status(400).json({
                     message: `Status inválido. Permitidos: ${VALID_ORDER_STATUS.join(", ")}`,
                });
            }

            await order.update({ total, status });

            return res.json(order);
        }catch(error){
            console.log(error);
            return res.status(500).json({ message: "Erro ao atualizar pedido" });
        }
    }

    static async delete(req: Request, res: Response){
        try{
            const { id } = req.params;

            const order = await Order.findByPk(id);

            if(!order){
                return res.status(404).json({ message: "Pedido não encontrado" });
            }

            await order.destroy();

            return res.json({ message: "Pedido deletado com sucesso" });
        } catch(error){
            console.log(error);
            return res.status(500).json({message : "Erro ao deletar pedido"});
        }
    }

}

export default OrderController;