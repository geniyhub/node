import express, { Request, Response } from 'express';
import postService from '../service/postService';

const app = express();

// Получение всех постов
const getPosts = (req: Request, res: Response): void => {
    const posts = postService.getAllPosts();
    res.render('posts', { posts });
};


const getPostById = (req: Request, res: Response): void => {
    const postId = parseInt(req.params.id, 10);
    const post = postService.getPostById(postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post-not-found', { postId });
    }
};

const createPost = (req: Request, res: Response): void => {
    const newPost = req.body;
    const createdPost = postService.createPost(newPost);
    res.status(201).json({ message: 'Post created successfully', post: createdPost });
};

export default { getPosts, getPostById, createPost };