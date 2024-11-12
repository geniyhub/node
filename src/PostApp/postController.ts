import express, { Request, Response } from 'express';
import postService from './postService';

async function getPosts(req: Request, res: Response): Promise<void> {
    try {
        const context = await postService.getAllPosts();
        res.render('posts', { posts: context.posts });
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function getPostById(req: Request, res: Response): Promise<void> {
    const postId = parseInt(req.params.id, 10);
    const context = postService.getPostById(postId);

    if ((await context).post) {
        res.render('post', { post: (await context).post });
    } else {
        res.status(404).render('post-not-found', { postId });
    }
}

function createPost(req: Request, res: Response): void {
    console.log(req.body);
    const posts = req.body;
    const createdPost = postService.createPost(posts);
    res.send(createdPost);
}

export default { getPosts, getPostById, createPost };