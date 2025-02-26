import { client, getErrorMessage } from "../client/prismaClient";
import { Prisma } from "@prisma/client"
import { IError } from "../types/types"

async function getPostById(id: number){
    try {
        const post = await client.post.findUnique({
            where: { id: id },
        })
        return post
    }catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            const errorMessage = getErrorMessage(err.code)
            console.log(errorMessage)
            throw err
        }
        console.log(err)
        return "Unexpected error"
    }
}

async function getAllPosts(){
    try {
        const posts = await client.post.findMany()
        return posts
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const errorMessage = getErrorMessage(err.code)
            console.log(errorMessage)
            return errorMessage
            }
            console.log(err)
            return "Unexpected error"
        }
    }

async function createPost(data: Prisma.PostUncheckedCreateInput){
    try{
        return await client.post.create({ data })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            const errorMessage = getErrorMessage(err.code)
            console.log(errorMessage)
            return errorMessage
        }
        console.log(err)
        return "Unexpected error"
    }
} 

const productRepository = {
    getPostById,
    getAllPosts,
    createPost
}

export default productRepository