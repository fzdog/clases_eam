import { Request, Response, Router } from "express";
import { insertUser, login } from "../controllers/user.controller";

const router = Router()

router.post('/login', login)
router.post('/insertUser', insertUser)

export {router}