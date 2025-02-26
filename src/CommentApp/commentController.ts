import { Request, Response } from 'express';
import commentService from './commentService';

async function getCommentById(req: Request, res: Response): Promise<void> {
    const commentId = parseInt(req.params.id, 10);
    const context = commentService.getCommentById(commentId);
    const isAuthenticated = res.locals.user ? true : false;
    if ((await context)) {
        res.render('comment', { comment: (await context), is_authenticated: isAuthenticated});
    } else {
        res.status(404).render('comment-not-found', { commentId });
    }
}


async function getComments(req: Request, res: Response){
   
        const context = await commentService.getAllComments();
    if (context.status === "error") {
        res.render('comments', { comments: context});
        return
    }
    res.render("comments", { comments: context.data});
}

async function createComment(req: Request, res: Response){
    const comment = req.body.comment;
    const msg = await commentService.createComment(comment)
    res.json({
        status: msg.status,
        message: msg.message
    })
}

export default { getCommentById, getComments, createComment };