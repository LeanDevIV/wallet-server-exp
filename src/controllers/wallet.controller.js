import { getSqliteDb } from "../config/db.js";

// Endpoint para verificar estado y crear usuario de prueba
export const checkHealth = async (req, res) => {
  try {
    const db = getSqliteDb();
    
    // Vamos a insertar un usuario "dummy" si no existe para verificar escritura
    await db.run(
      "INSERT INTO users (name, balance) VALUES (?, ?)",
      ["Usuario Test " + Date.now(), 1000]
    );

    // Leemos la lista de usuarios
    const users = await db.all("SELECT * FROM users ORDER BY id DESC LIMIT 5");

    res.json({
      status: "Ok",
      db: "SQLite is writing/reading correctly",
      recentUsers: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error de base de datos", details: error.message });
  }
};