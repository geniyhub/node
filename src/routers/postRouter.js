const express = require("express")
const productControllers = require("../controllers/postController")

const router = express.Router()

router.get("/post/:id", postControllers.getPostById);
router.get("/posts", postControllers.getPosts);
router.post("/post/create", postControllers.createPost);

module.exports = router