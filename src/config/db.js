import Database from 'better-sqlite3';

// Se crea el archivo 'wallet.db' automáticamente en la raíz
const db = new Database('wallet.db');

// Creamos la tabla de usuarios inicial
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    balance REAL DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;