import { Request, Response } from "express"
import postService from "./postService"

async function getPostById(req: Request, res: Response){
    const id = +req.params.id
    const result = await postService.getPostById(id)
    res.json(result)
}
async function getAllPosts(req: Request, res: Response){
    const result = await postService.getAllPosts()
    res.json(result)
}

const postControllerApi = {
    getPostById,
    getAllPosts
}

export default postControllerApi