// Importa o módulo 'sqlite3' e ativa o modo verboso para obter mais detalhes sobreos erros e operações do banco de dados
const sqlite3 = require('sqlite3').verbose();
// Cria uma nova instância de banco de dados SQLite em memória. ':memory:' significa que o banco de dados é armazenado na RAM
const db = new sqlite3.Database(':memory:');
// Executa uma série de operações SQL de forma serializada, garantindo que cada operação seja completada antes da próxima iniciar
db.serialize(() => {
// Cria uma tabela chamada 'products' com colunas 'id', 'name', 'quantity' e 'brand'.
// 'id' é a chave primária e será autoincrementada automaticamente
db.run("CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,quantity INTEGER, brand TEXT)");
});
// Exporta a instância do banco de dados 'db' para que possa ser utilizada em outros módulos do Node.js
module.exports = db;