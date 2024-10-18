const postService = require('../services/postService');

const getPosts = (req, res) => {
    const posts = postService.getAllPosts();
    res.render('posts', { posts });
};

const getPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postService.getPostById(postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.render('post-not-found', { postId });
    }
};

const createPost = (req, res) => {
    const newPost = req.body;
    const createdPost = postService.createPost(newPost);
    res.status(201).json({ message: 'Post created successfully', post: createdPost });
};

module.exports = { getPosts, getPostById, createPost };