import  db  from "../config/db.js";

// Endpoint para verificar estado y crear usuario de prueba
export const checkHealth = async (req, res) => {
  try {
    
    // Vamos a insertar un usuario "dummy" si no existe para verificar escritura
    // await db.run(
    //   "INSERT INTO users (name, balance) VALUES (?, ?)",
    //   ["Usuario Test " + Date.now(), 1000]
    // );
    console.log(`Health check at ${new Date().toISOString()}, and there is TODO:${"TOTAL_USERS"}, users in the system.`);
    

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

export function balanceController(req, res) {
try {
  // TODO: Implement
  // balanceService()
  res.json({ balance: 1000 });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Error retrieving balance", details: error.message });
}
}

export function transferController(req, res) {
try {
  // TODO: Implement
  // transferService()
  res.json({"Simulation":"Tranfer executed",
    "To":"Dummy user",
    "From": "Dummy user 2",
    "Mount": "100"
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Error processing transfer", details: error.message });
}};

export function transactionsController(req, res) {
try {
  // TODO: Implement
  // transactionsService()
  res.json({
    transactions: [
      { id: 1, type: "deposit", amount: 500, date: "2024-01-01" },
      { id: 2, type: "withdrawal", amount: 200, date: "2024-01-02" }
    ]
  });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Error retrieving transactions", details: error.message });
}};
export const wallet = {
  balanceController,
  transferController,
  transactionsController
};