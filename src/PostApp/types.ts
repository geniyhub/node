import { Prisma } from "@prisma/client";


export type IPost = Prisma.PostGetPayload<{}>
export type IPostCreate = Prisma.PostUncheckedCreateInput
export type IPostWithPosts = Prisma.PostGetPayload<{
    include: {
        comment: true
    }
}>