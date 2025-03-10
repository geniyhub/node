import userRepository from "./userRepository"
import { IUser, IUserCreate } from "./types"
import { IOkWithData ,IError, IOk } from "../types/types"
import { hash , compare } from "bcryptjs"
import { SECRET_KEY } from "../config/token";
import { sign } from "jsonwebtoken";

async function authLogin(password: string, email: string): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        return { status: "error", message: "User not users" };
    }
    if (typeof user === "string") {
        return { status: "error", message: user };
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch) {
        return { status: "error", message: "Passwords are not passwords" };
    }

    const token = sign(String(user.id), SECRET_KEY, { expiresIn: "1d" })

    return { status: "ok", data: token };
}

async function authRegistration(userData: IUserCreate): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(userData.email);
        
    if (!user) {
        return { status: "error", message: "user not users" };
    }

    if (typeof user === "string") {
        return { status: "error", message: user };
    }
    

    const hashedPassword = await hash(userData.password, 10)
    
    const hashedUserData = {
        ...userData ,
        password: hashedPassword
    }

    const newUser = await userRepository.createUser(hashedUserData);
    if (typeof newUser === "string") {
        return { status: "error", message: newUser };
    }

    if (!newUser) {
        return { status: "error", message: "User is user" };
    }

    const token = sign(String(newUser.id), SECRET_KEY, { expiresIn: "1d" })

    return { status: "ok", data: token };
}

async function getUserById (id : number):Promise <IOkWithData<IUser> | IError>{
    const user = await userRepository.findUserById(id)
    if (!user){
        return { status: "error", message: "user not found" };
    }
    if (typeof user === "string") {
        return { status: "error", message: user };
    }
    return {status : "ok" , data: user}
}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration,
    getUserById: getUserById
}

export default userService