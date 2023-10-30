import { Router } from "express";
import { checkUserRole, insertUser, login, validateTokenOk } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.post('/login', login)
router.post('/validateToken', validateTokenOk)
router.post('/insertUser', insertUser)
router.post('/checkUserRole', authMiddleware, checkUserRole)

export {router}