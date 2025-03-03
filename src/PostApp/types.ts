import { Prisma } from "@prisma/client";

// это не интерфейсы, поэтому лучше называть без буквы I 

export type IPost = Prisma.PostGetPayload<{}>
export type IPostCreate = Prisma.PostUncheckedCreateInput
export type IPostWithPosts = Prisma.PostGetPayload<{
    include: {
        comment: true
    }
}>