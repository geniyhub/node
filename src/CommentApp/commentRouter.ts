import { Router } from 'express';
import CommentController from './commentController';
import { authMiddleware } from "../middlewares/authMiddleware"

const router = Router();


router.get('/comment/all', CommentController.getComments);
router.get('/comment/:id', CommentController.getCommentById);
router.post('/comment/create', CommentController.createComment);

export default router;