# 🛍️ Mini E-commerce API

Uma API simples para gerenciamento de produtos, desenvolvida com **Node.js**, **Express** e **Sequelize**.  
Este projeto faz parte do meu processo de estudos e consolidação de conhecimentos sobre backend, criação de CRUDs e integração com banco de dados relacional.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Sequelize**
- **MySQL** *(ou o banco que você estiver usando)*
- **Nodemon / ts-node-dev** para desenvolvimento

---

## 📦 Funcionalidades

Atualmente, a API permite:

### 📌 Produtos
- Criar um produto
- Listar todos os produtos
- Buscar um produto por ID
- Atualizar um produto
- Deletar um produto

CRUD completo implementado em `/products`.

---

## 🔧 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/mini-ecommerce-node.git

# Entre na pasta
cd mini-ecommerce-node

# Instale as dependências
npm install

# Configure seu banco de dados no arquivo .env

# Rode as migrations (se tiver)
npx sequelize db:migrate

# Inicie o servidor
npm run dev
