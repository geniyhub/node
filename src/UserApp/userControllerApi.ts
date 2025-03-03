import userService from "./userService"
import { Request, Response } from "express"


async function authUser(req : Request , res : Response){
    const data = req.body
    const result = await userService.authLogin(data.email, data.password)
    res.json(result)
}

async function registerUser(req : Request , res : Response){
    const data = req.body
    const result = await userService.authRegistration(data)
    res.json(result)
}
// /me?


const userControllerApi = {
    registerUser: registerUser,
    authUser: authUser
}
export default userControllerApi