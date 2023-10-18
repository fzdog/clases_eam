import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Pasando por el middleware");
    next()
}

export {authMiddleware}