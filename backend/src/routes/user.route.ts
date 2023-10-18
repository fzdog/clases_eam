import { Router } from "express";
import { insertUser, login, validateTokenOk } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.post('/login', login)
router.post('/validateToken', authMiddleware, validateTokenOk)
router.post('/insertUser', authMiddleware, insertUser)

export {router}