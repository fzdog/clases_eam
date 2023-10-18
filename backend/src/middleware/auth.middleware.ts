import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";
import { Constants } from "../utils/constants";

const authMiddleware = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if (!isUser) {
            res.status(401).send({ msg: Constants.MSG_ERROR_TOKEN_INVALIDO, error: true })
        } else {
            req.user = isUser;
            console.log("El token es válido");
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400).send({ msg: Constants.MSG_ERROR_TOKEN_INVALIDO, error: true })
    }
}

export {authMiddleware}