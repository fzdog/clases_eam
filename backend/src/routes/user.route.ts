import { Request, Response, Router } from "express";
import { insertUser, login } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router()

router.post('/login',authMiddleware ,login)
router.post('/insertUser', insertUser)

export {router}