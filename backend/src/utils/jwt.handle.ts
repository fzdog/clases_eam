import { sign } from "jsonwebtoken"


const JWS_TOKEN = "23445trye3345457ert456"

const generateToken = (id:any) => {
    const jwt = sign({ id }, JWS_TOKEN, {
        expiresIn:"3h"
    })
    return jwt
}

const verifyToken = async () => {

}

export {generateToken,verifyToken}