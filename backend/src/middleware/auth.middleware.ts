import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    console.log("Pasando por el middleware");
    next()
}

export {authMiddleware}