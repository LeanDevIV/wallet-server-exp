import { Router } from "express";
import { checkHealth } from "../controllers/wallet.controller.js";
import walletRoutes from "./wallet.routes.js";
const router = Router();

// GET http://localhost:3000/api/health
router.get("/health", checkHealth);

// Acá vamos a agregar las de transferencias después
// router.post("/transfer", transferMoney);
router.use("/wallet", walletRoutes);




export default router;
