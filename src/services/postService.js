let posts = [
    { id: 1, name: 'post1', author: 'Author1', description: 'Description for post1', date: '2023-10-13' },
    { id: 2, name: 'post2', author: 'Author2', description: 'Description for post2', date: '2023-10-12' },
    { id: 3, name: 'post3', author: 'Author3', description: 'Description for post3', date: '2023-10-11' }
];

const getAllPosts = () => posts;

const getPostById = (id) => posts.find(post => post.id === id);

const createPost = (newPost) => {
    const newId = posts.length + 1;
    newPost.id = newId;
    posts.push(newPost);
    return newPost;
};

module.exports = { getAllPosts, getPostById, createPost };