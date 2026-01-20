import {Router} from "express";
import { wallet } from "../controllers/wallet.controller.js";

const router = Router();


router.get("/balance", wallet.balanceController);

// router.post("/transfer", transfer.controller);

// router.get("/transactions", transactions.controller);

export default router;