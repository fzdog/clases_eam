import { Request, Response } from "express"
import { createUser } from "../services/user.service"


const login = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        res.status(200).send({email})
    } catch (error) {
        
    }
}

const insertUser = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseUser = await createUser(body)
        res.status(200).send({ responseUser })
    } catch (error) {

    }
}

export {login, insertUser}
