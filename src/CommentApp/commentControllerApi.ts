import { Request, Response } from "express"
import ccommentService from "./commentService"

async function getAllComments(req: Request, res: Response){
    const result = await ccommentService.getAllComments()
    res.json(result)
}

const commentControllerApi = {
    getAllComments
}

export default commentControllerApi