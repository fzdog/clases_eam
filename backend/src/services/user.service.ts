import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"

const createUser = async (user: User) => {
    const userCreated = await UserModel.create(user)
    return userCreated
}

export {createUser}