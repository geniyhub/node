import { Prisma } from "@prisma/client";


export type IComment = Prisma.CommentGetPayload<{}>
export type ICommentCreate = Prisma.CommentUncheckedCreateInput
export type ICommentWithPosts = Prisma.CommentGetPayload<{
    include: {
        post: true
    }
}>