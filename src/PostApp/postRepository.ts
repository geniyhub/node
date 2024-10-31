import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
import { Prisma } from "@prisma/client"

async function getPostById(id: number){
    const post = await client.post.findUnique({
        where: {
            id: id,
        }
    })
    return post
}

async function getAllPosts(){
    try {
        const posts = await client.post.findMany()
        return posts
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                console.log(err.message)
                throw err
            }
        }
    }
}

const productRepository = {
    getPostById,
    getAllPosts,
}

export default productRepository