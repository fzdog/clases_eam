import { Request, Response } from "express"
import { createUser, getLogin } from "../services/user.service"
import handleError from "../utils/error.handle"
import { Constants } from "../utils/constants"
import { User } from "../interfaces/user.interface"

const login = async (req: Request, res: Response) => {
    try {
        const user: User = req.body     
        const userDB = await getLogin(user)
        if (userDB === Constants.MSG_ERROR_PASSWORD_INCORRECTO)
            return res.status(500).send({ msg: Constants.MSG_ERROR_PASSWORD_INCORRECTO, error: true })
        
        if (userDB === Constants.MSG_ERROR_USUARIO_NO_ECONTRADO)
            return res.status(500).send({ msg:Constants.MSG_ERROR_USUARIO_NO_ECONTRADO, error: true })          
        res.status(200).send({ data:userDB })
    } catch (error) {
        console.log(error);     
        handleError(res,Constants.MSG_ERROR_APLICACION)
    }
}

const insertUser = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseUser = await createUser(body)
        res.status(200).send({ responseUser })
    } catch (error) {
        console.log(error);        
        handleError(res, Constants.MSG_ERROR_APLICACION)
    }
}

export {login, insertUser}
