import express from 'express';
import { sequelize } from './db';
import ProductRoutes from "./routes/ProductRoutes";
import OrderRoutes from './routes/OrderRoutes';

const app = express();
app.use(express.json());

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Mini Ecommerce API is running'})
});

sequelize.sync({ alter:true })
.then(() => {
    console.log('Banco sincronizado com sucesso!');
})
.catch((error:unknown) => {
    console.error('Erro ao sincronizar o banco:', error);
});

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});