import express from "express"
import postControllerApi from "./postControllerApi"

const router = express.Router()

router.get("/all", postControllerApi.getAllPosts)
router.get("/:id", postControllerApi.getPostById)

export default router