import express from 'express';
import postController from './postController';

const app = express();

const router = express.Router();

router.get('/posts/:id', postController.getPostById);
router.get('/posts', postController.getPosts);
router.post('/post/create', postController.createPost);

export default router;