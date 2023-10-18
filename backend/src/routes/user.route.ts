import { Router } from "express";
import { insertUser, login } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.post('/login',login)
router.post('/insertUser', authMiddleware, insertUser)

export {router}