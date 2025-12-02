import {Request, Response} from "express";
import { Product } from "../models/Product";

class ProductController {
    static async create(req: Request, res: Response){
        try{
            const { name , price } = req.body;

            if(!name || price === undefined){
                return res.status(400).json({message: "Nome e preço são obrigatórios"})
            }

            const product = await Product.create({ name, price});
            return res.status(201).json(product);
        } catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao criar produto" });
        }

        }

    static async index(req: Request, res: Response) {
        try{
            const products = await Product.findAll();
            return res.json(products);
        }catch(error){
            return res.status(500).json({ error: "Erro ao buscar produtos" })
        }
    }

    static async show(req: Request, res:Response){
        try{
            const { id } = req.params;

            if(!id){
                return res.status(400).json({ message: "ID é obrigatorio" });
            }

            const product = await Product.findByPk(id);

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado"});
            }

            return res.json(product);
        }catch(error){
            console.error(error);
            return res.status(500).json({ message : "Erro ao buscar produto"});
        }
    }

    static async update(req: Request, res: Response) {
        try{
            const { id } = req.params;
            const { name, price } = req.body;

            if(!id){
                return res.status(400).json({ message: "ID é obrigatorio"});
            }

            const product = await Product.findByPk(id);

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado"});
            }

            if(name !== undefined) product.name = name;
            if(price !== undefined) product.price = price;

            await product.save();

            return res.json(product);

        }catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao atualizar produto"});
        }
    }

    static async delete(req: Request, res: Response){
        try{
            const { id } = req.params;

            const product = await Product.findByPk(id);

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            await product.destroy();
            
            return res.json({ message: "Produto deletado com sucesso" });

        } catch(error){
            console.error(error);
            return res.status(500).json({ message: "Erro ao deletar produto" });
        }
    }
}

export default ProductController;