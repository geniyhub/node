const express = require("express")
const postControllers = require("../controllers/postController")

const router = express.Router()

router.get("/post/:id", postController.getPostById);
router.get("/posts", postController.getPosts);
router.post("/post/create", postController.createPost);

module.exports = router