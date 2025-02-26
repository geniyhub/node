import express from "express"
import commentControllerApi from "./commentControllerApi"

const router = express.Router()

router.get("/all", commentControllerApi.getAllComments)


export default router