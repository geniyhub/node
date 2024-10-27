import express, { Request, Response } from 'express';
import postService from '../service/postService';

function getPosts(req: Request, res: Response): void {
    const posts = postService.getAllPosts();
    res.render('posts', { posts });
}

function getPostById(req: Request, res: Response): void {
    const postId = parseInt(req.params.id, 10);
    const post = postService.getPostById(postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post-not-found', { postId });
    }
}

function createPost(req: Request, res: Response): void {
    console.log(req.body);
    const newPost = req.body;
    const createdPost = postService.createPost(newPost);
    res.send(createdPost);
}

export default { getPosts, getPostById, createPost };