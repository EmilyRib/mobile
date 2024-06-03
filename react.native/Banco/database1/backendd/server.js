// Importa o módulo express para criar o servidor web
const express = require("express");
// Importa o módulo body-parser para lidar com requisições JSON
const bodyParser = require("body-parser");
// Importa o módulo cors para permitir solicitações de outras origens
const cors = require("cors");
// Importa a instância do banco de dados SQLite
const db = require("./database");
// Cria uma instância do aplicativo Express
const app = express();
// Define a porta na qual o servidor irá rodar, usando a variável de ambiente PORTou 3000 por padrão
const PORT = process.env.PORT || 3000;


// Adiciona o middleware cors ao aplicativo, permitindo que ele lide com solicitações CORS
app.use(cors());
// Adiciona o middleware body-parser para analisar o corpo das requisições como JSON
app.use(bodyParser.json());
// CRUD Endpoints
// Endpoint para criar um novo produto
app.post("/products", (req, res) => {
// Extrai name, quantity e brand do corpo da requisição
const { name, quantity, brand } = req.body;
// Executa uma instrução SQL para inserir um novo produto na tabela products
db.run(
"INSERT INTO products (name, quantity, brand) VALUES (?, ?, ?)",
[name, quantity, brand],
function (err) {
// Se houver um erro, retorna uma resposta de erro
if (err) {
return res.status(500).json({ error: err.message });
}
// Retorna o ID do novo produto criado
res.status(201).json({ id: this.lastID });
}
);
});
// Endpoint para ler todos os produtos
app.get("/products", (req, res) => {
// Executa uma instrução SQL para selecionar todos os produtos da tabela products
db.all("SELECT * FROM products", [], (err, rows) => {
// Se houver um erro, retorna uma resposta de erro
if (err) {
return res.status(500).json({ error: err.message });
}
// Retorna todos os produtos em um array
res.status(200).json({ products: rows });
});
});
// Endpoint para atualizar um produto
app.put("/products/:id", (req, res) => {
// Extrai o ID do produto dos parâmetros da URL
const { id } = req.params;
// Extrai name, quantity e brand do corpo da requisição
const { name, quantity, brand } = req.body;
// Executa uma instrução SQL para atualizar o produto na tabela products
db.run(
"UPDATE products SET name = ?, quantity = ?, brand = ? WHERE id = ?",
[name, quantity, brand, id],
function (err) {
// Se houver um erro, retorna uma resposta de erro
if (err) {
return res.status(500).json({ error: err.message });
}
// Retorna o número de linhas afetadas pela atualização
res.status(200).json({ updated: this.changes });
}
);


});
// Endpoint para deletar um produto
app.delete("/products/:id", (req, res) => {
// Extrai o ID do produto dos parâmetros da URL
const { id } = req.params;
// Executa uma instrução SQL para deletar o produto da tabela products
db.run("DELETE FROM products WHERE id = ?", id, function (err) {
// Se houver um erro, retorna uma resposta de erro
if (err) {
return res.status(500).json({ error: err.message });
}
// Retorna o número de linhas afetadas pela exclusão
res.status(200).json({ deleted: this.changes });
});
});
// Inicia o servidor e escuta na porta definida, exibindo uma mensagem no console quando o servidor está rodando
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});