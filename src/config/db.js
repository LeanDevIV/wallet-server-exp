//import mongoose from "mongoose";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// --- 1. Configuración de MongoDB (Logs) ---
//export const connectMongo = async () => {
//   try {
//     // Asegurate de tener MONGO_URI en tu .env, o usá una local por defecto
//     const uri =
//       process.env.MONGO_URI || "mongodb://localhost:27017/wallet_audit";
//     await mongoose.connect(uri);
//     console.log("✅ MongoDB conectado (Audit Logs)");
//   } catch (error) {
//     console.error("❌ Error conectando a MongoDB:", error);
//     process.exit(1); // Si falla la auditoría, mejor no arrancar por seguridad
//   }
//};

// --- 2. Configuración de SQLite (Transaccional) ---
let sqliteDb = null;

export const connectSqlite = async () => {
  try {
    sqliteDb = await open({
      filename: "./database.sqlite", // Se crea en la raíz del proyecto
      driver: sqlite3.Database,
    });
    console.log("✅ SQLite conectado (Transactional Core)");

    // De paso, inicializamos la tabla acá si no existe (DDL)
    await sqliteDb.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        balance REAL DEFAULT 0 CHECK(balance >= 0)
      );
    `);

    return sqliteDb;
  } catch (error) {
    console.error("❌ Error conectando a SQLite:", error);
    process.exit(1);
  }
};

// Helper para obtener la instancia de SQLite desde los controladores
export const getSqliteDb = () => {
  if (!sqliteDb) {
    throw new Error("La base de datos SQLite no ha sido inicializada.");
  }
  return sqliteDb;
};
