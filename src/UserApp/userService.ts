import userRepository from "./userRepository"

interface IAuthOk{
    status: "ok",
    user: {
        id: number,
        username: string,
        email: string,
        password: string,
    }
}

interface IAuthError{
    status:"error",
    message: string,
}

interface IUserData{
    username: string,
    email: string,
    password: string
}




async function authLogin(password:string, email: string): Promise<IAuthOk | IAuthError> {
    const user = await userRepository.findUserByEmail(email)

    if (!user) {
        return {status:"error", message: "пользователь не найден"}
    }
    if (user.password != password) {
        return {status:"error", message: "Пароли не совпадают"}
    }
    
    console.log(user)
    console.log(typeof user)
    return {status : "ok" , user: user}
}


async function authRegistration(userData: IUserData): Promise<IAuthOk | IAuthError> {
    const user = await userRepository.findUserByEmail(userData.email)

    if (user){
        return { status:"error", message:"Пользователь уже существует" }
    }

    const newUser = await userRepository.createUser(userData)

    if (!newUser){
        return{ status:"error", message:"Не удалось создать пользователя" }
    }
    return{ status:"ok" , user: newUser}

}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService