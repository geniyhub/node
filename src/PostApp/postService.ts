import postRepository from './postRepository';

const posts: {
            id: number,
            name: string,
            author: string,
            description: string,
            date: string}[] = [
    {
        id: 1,
        name: 'post1',
        author: 'Author1',
        description: 'Description for post1',
        date: '2023-10-13' 
    },
    {
        id: 2,
        name: 'post2',
        author: 'Author2',
        description: 'Description for post2',
        date: '2023-10-12'
    },
    {
        id: 3,
        name: 'post3',
        author: 'Author3',
        description: 'Description for post3',
        date: '2023-10-11'
    },
];


async function getAllPosts (max?: number){
    const context = {
        posts: await postRepository.getAllPosts()
    }
    return context
}

async function getPostById(id: number){
    const post = await postRepository.getPostById(id);
    const context = {
        post
    }
    return context
}

function createPost(post:{id:number,
    name: string,
    author: string,
    description: string,
    date: string}){
    posts.push(post)
    return "hello world"
}


export default { getAllPosts, getPostById, createPost };