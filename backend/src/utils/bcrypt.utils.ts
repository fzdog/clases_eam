import bcrypt from "bcrypt"

const encrypt = async (password: string) => {
    const passwordHash = await bcrypt.hash(password, 10)
    return passwordHash
}

const verify = async (password: string, passwordHash:string) => {
    let isOk = false
    await bcrypt.compare(password, passwordHash).then((res) => {
        isOk = res
    })
    return isOk
}

export {encrypt,verify}
