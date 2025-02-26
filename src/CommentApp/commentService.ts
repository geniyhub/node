import commentRepository from './commentRepository';
import {Prisma} from "@prisma/client"
import { IError, IOk ,IOkWithData} from "../types/types"
import { IComment, ICommentCreate, ICommentWithPosts} from "./types"



async function getAllComments(): Promise<IOkWithData<IComment[]> | IError> {
  const comment = await commentRepository.getAllComments()
    if (!comment){
        return{status: "error", message: "vsekapec"}
    }
    if (typeof comment === "string") {
        return { status: "error", message: comment }
    }
    return {status:"ok", data: comment}
}

async function getCommentById(id:number): Promise<IOkWithData<IComment> | IError> {
  const comment = await commentRepository.getCommentById(id);
  if (!comment) {
      return { status: "error", message: "vsekapec" };
  }
  if (typeof comment === "string") {
      return { status: "error", message: comment }
  }
  return { status: "ok", data: comment };
}

async function createComment(data: ICommentCreate): Promise<IOk | IError> {
        const comment = await commentRepository.createComment(data)
        if (!comment){
            return{status: "error", message: "vsekapec"}
        }
        if (typeof comment === "string") {
            return { status: "error", message: comment }
        }
        return {status:"ok", message: "where is your power"}
}





export default { getAllComments, getCommentById, createComment};
