## 📦 Mini Ecommerce API

API backend para um mini sistema de ecommerce desenvolvida com Node.js, TypeScript, Express e Sequelize.

### 🚀 Tecnologias
- Node.js
- TypeScript
- Express
- Sequelize
- SQLite

### 📂 Funcionalidades

#### Produtos
- Criar produto
- Listar produtos
- Buscar produto por ID
- Atualizar produto
- Deletar produto

#### Pedidos
- Criar pedido
- Listar pedidos
- Atualizar status do pedido
- Deletar pedido

#### Itens do Pedido
- Adicionar item ao pedido
- Listar itens do pedido
- Remover item do pedido
- Cálculo automático do total do pedido

### 🧠 Regras de Negócio
- O total do pedido é calculado automaticamente com base nos itens
- O total é recalculado ao adicionar ou remover itens
- O preço do item é obtido a partir do produto

### ▶️ Como executar
```bash
npm install
npm run dev


