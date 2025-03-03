import { Prisma } from "@prisma/client"

// это не интерфейсы, поэтому лучше называть без буквы I 
export type IUser = Prisma.UserGetPayload<{}>
export type IUserCreate = Prisma.UserUncheckedCreateInput