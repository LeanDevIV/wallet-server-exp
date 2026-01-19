import { Router } from "express";
import { checkHealth } from "../controllers/wallet.controller.js";

const router = Router();

// GET http://localhost:3000/api/health
router.get("/health", checkHealth);

// Acá vamos a agregar las de transferencias después
// router.post("/transfer", transferMoney);

export default router;
