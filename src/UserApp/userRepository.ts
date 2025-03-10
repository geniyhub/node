import { client, getErrorMessage } from "../client/prismaClient"
import { Prisma } from "@prisma/client"


async function findUserByEmail(email: string){
    try {
        const user = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err)
        return "you don have enough power and motivation"
        }
    }



async function createUser(data: Prisma.UserCreateInput){
    try {
        const user = await client.user.create({
            data: data
        })
        return user
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err)
        return "you don have enough power and motivation"
        }
}

async function findUserById (id : number) {
    try {
        const user = await client.user.findUnique({
            where:{
                id :id
            },
            select: {
                username: true, 
                email: true, 
                id: true,
                password: true,
                image: true,
                role: true
            },
        });
        return user;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
        }
        console.log(err);
        return "error";
    }
}





const userRepository = {
    findUserByEmail, 
    createUser,
    findUserById
}

export default userRepository