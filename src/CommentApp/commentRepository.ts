import { client, getErrorMessage } from "../client/prismaClient"
import { Prisma } from "@prisma/client";
import { ICommentCreate } from "./types";
// Внимание к табуляциям, где то 4, где то 2

async function getAllComments() {
  try {
    const comments = await client.comment.findMany();
    return comments;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError){
      const errorMessage = getErrorMessage(err.code);
      console.log(errorMessage);
      return errorMessage;
  }
    console.log(err)
    return "you don have enough power and motivation"
  }
}

async function getCommentById(id: number) {
  try {
  const comment = await client.comment.findUnique({
    where: { id: id },
  });
  return comment;
}catch(err){
  if (err instanceof Prisma.PrismaClientKnownRequestError){
    const errorMessage = getErrorMessage(err.code);
    console.log(errorMessage);
    return errorMessage;
  }
  console.log(err)
  return "you don have enough power and motivation"
}
}

async function createComment(data: ICommentCreate) {
  try {
    const comment = await client.comment.create({ data });
    return comment;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      const errorMessage = getErrorMessage(err.code);
            console.log(errorMessage);
            return errorMessage;
      }
      console.log(err)
      return "you don have enough power and motivation"
  }
}

const commentRepository = {
  getAllComments,
  getCommentById,
  createComment,
};

export default commentRepository;