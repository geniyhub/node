import express from 'express';
import postController from './postController';
import { authMiddleware } from "../middlewares/authMiddleware"


const router = express.Router();


router.get('/posts/:id', postController.getPostById);
router.get('/posts', postController.getPosts);
router.post('/post/create', postController.createPost);

export default router;