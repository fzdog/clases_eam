import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verify } from "../utils/bcrypt.utils"
import { Constants } from "../utils/constants"
import { generateToken } from "../utils/jwt.handle"

const createUser = async (user: User) => {
    user.password = await encrypt(user.password)
    const userCreated = await UserModel.create(user)
    return userCreated
}

const getLogin = async (user: User) => {

    let userDB:any = await UserModel.findOne({ email: user.email })
    if (!userDB) return Constants.MSG_ERROR_USUARIO_NO_ECONTRADO
    
    const isOk = await verify(user.password, userDB.password)
    if (!isOk) return Constants.MSG_ERROR_PASSWORD_INCORRECTO
    return userDB 

}




export { createUser, getLogin }