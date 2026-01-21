import {Router} from "express";

const router = Router();

router.get("/users",usersController);

export default router;