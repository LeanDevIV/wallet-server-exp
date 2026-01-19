import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { connectSqlite } from "./config/db.js";

connectSqlite();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

// Rutas
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ msg: "API WALLET HÍBRIDA FUNCIONANDO CORRECTAMENTE" });
});

async function startServer() {
  try {
    await connectSqlite();
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}
startServer();

export default app;
