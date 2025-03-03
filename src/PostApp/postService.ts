import postRepository from './postRepository';
import {IPost, IPostCreate} from "./types"
import { IOkWithData ,IError, IOk} from "../types/types"
// Лишние пустые строки



async function getAllPosts (): Promise<IOkWithData<IPost[]> | IError> {
    const res = await postRepository.getAllPosts()
    if (typeof(res) === "string"){
        return {
            status: "error",
            message: res
        }

    }
    return {
        status: "ok",
        data: res
    }
}

async function getPostById(id: number): Promise<IOkWithData<IPost> | IError>{
    const res = await postRepository.getPostById(id);
    if (res === null) {
        return {
            status: "error",
            message: "Post not found"
        }
    }


    if (typeof(res) === "string") {
        return {
            status: "error",
            message: res
        }
    }
    return {
        status: "ok",
        data: res
    }
}

async function createPost(product: IPostCreate): Promise<IOk | IError> {
    const res = await postRepository.createPost(product)

    if (typeof(res) === "string"){
        return {status: "error", message: res}
    }

    return {
        status : "ok",
        message : "Successfuly created product"
    }
}



export default { getAllPosts, getPostById, createPost};