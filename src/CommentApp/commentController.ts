import { Request, Response } from 'express';
import commentService from './commentService';

async function getCommentById(req: Request, res: Response): Promise<void> {
    const commentId = parseInt(req.params.id, 10);
    const context = commentService.getCommentById(commentId);
    const isAuthenticated = res.locals.user ? true : false;
    if ((await context).comment) {
        res.render('comment', { comment: (await context).comment, is_authenticated: isAuthenticated});
    } else {
        res.status(404).render('comment-not-found', { commentId });
    }
}


async function getComments(req: Request, res: Response): Promise<void> {
    try {
        const context = await commentService.getAllComments();
        res.render('comments', { comments: context.comments,});
    } catch (error) {
        console.error('Failed to fetch comments:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function createComment(req: Request, res: Response): Promise<void> {
    try {
        const newComment = req.body;
        const createdComment = await commentService.createComment(newComment);
        res.status(201).send(createdComment);
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).send('Internal Server Error');
    }
}

export default { getCommentById, getComments, createComment };