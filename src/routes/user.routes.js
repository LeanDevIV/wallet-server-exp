import {Router} from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/users",userController.getAllUser);

export default router;