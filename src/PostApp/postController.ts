import express, { Request, Response } from 'express';
import postService from './postService';

async function getPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()

    if (typeof(context) !== 'undefined') {

        if (context.status === "error"){
            res.render("error", {message: context.message});
            return
        }
        res.render("posts", {message: context.data});
    } else {
        return
    }
}

async function getPostById(req: Request, res: Response) {
    const postId = +req.params.id;
    const context = await postService.getPostById(postId);
        if (context.status === "error"){
            res.render("error", {message: context.message});
            return
        }

        res.render("post", {post: context.data});
}

async function createPost(req: Request, res: Response) {
    const post = req.body
    const result = await postService.createPost(post)
    res.json({
        status: result.status,
        message: result.message
    })
}

export default { getPosts, getPostById, createPost };