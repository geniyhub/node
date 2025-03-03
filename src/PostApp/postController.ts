// Импорт не используется, нужно убрать
import express, { Request, Response } from 'express';
import postService from './postService';

async function getPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    // Это условие бесполезное, context не может быть undefined
    if (typeof(context) !== 'undefined') {

        if (context.status === "error"){
            res.render("error", {message: context.message});
            return
        }
        res.render("posts", {message: context.data});
        // это тоже не имеет смысла
    } else {
        return
    }
}

async function getPostById(req: Request, res: Response) {
    const postId = +req.params.id;
    const context = await postService.getPostById(postId);
    // табуляции
        if (context.status === "error"){
            res.render("error", {message: context.message});
            return
        }

        res.render("post", {post: context.data});
}

async function createPost(req: Request, res: Response) {
    const post = req.body
    const result = await postService.createPost(post)
    // у тебя в result есть IOk и IError, они выглядят также как и ниже объект
    res.json({
        status: result.status,
        message: result.message
    })
}

export default { getPosts, getPostById, createPost };