type Post = {
    id: number;
    name: string;
    author: string;
    description: string;
    date: string;
};

let posts: Post[] = [
    { id: 1, name: 'post1', author: 'Author1', description: 'Description for post1', date: '2023-10-13' },
    { id: 2, name: 'post2', author: 'Author2', description: 'Description for post2', date: '2023-10-12' },
    { id: 3, name: 'post3', author: 'Author3', description: 'Description for post3', date: '2023-10-11' }
];

const getAllPosts = (): Post[] => posts;

const getPostById = (id: number): Post | undefined => posts.find(post => post.id === id);

const createPost = (newPost: Omit<Post, 'id'>): Post => {
    const newId = posts.length + 1;
    const postWithId: Post = { ...newPost, id: newId };
    posts.push(postWithId);
    return postWithId;
};

export default { getAllPosts, getPostById, createPost };