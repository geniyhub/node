import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'First post',
            author: 'Konnan Kalk',
            date: new Date().toISOString(),
        },
    })
}

createPost().then(() => {
    prisma.$disconnect
}).catch((err) => {
    console.error(err)
    prisma.$disconnect()
})
