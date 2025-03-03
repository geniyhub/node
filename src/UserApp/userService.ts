import userRepository from "./userRepository"
// Импорт User не используется, нужно убрать
import { IUser, IUserCreate } from "./types"
// Импорт IOk не используется, нужно убрать
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
    // Лучше подписывать в токен объект с id -> {id: user.id}
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
    // Лучше подписывать в токен объект с id -> {id: user.id}
    const token = sign(String(newUser.id), SECRET_KEY, { expiresIn: "1d" })

    return { status: "ok", data: token };
}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService