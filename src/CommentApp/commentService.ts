import commentRepository from './commentRepository';

const comments: {
  id: number;
  name: string;
  content: string;
  userId: number;
  postId: number;
}[] = [
  {
    id: 1,
    name: 'Comment 1',
    content: 'This is the content of comment 1',
    userId: 1,
    postId: 1,
  },
  {
    id: 2,
    name: 'Comment 2',
    content: 'This is the content of comment 2',
    userId: 2,
    postId: 1,
  },
  {
    id: 3,
    name: 'Comment 3',
    content: 'This is the content of comment 3',
    userId: 1,
    postId: 2,
  },
];

async function getAllComments(max?: number) {
  const context = {
    comments: await commentRepository.getAllComments(),
  };
  return context;
}

async function getCommentById(id: number) {
  const comment = await commentRepository.getCommentById(id);
  const context = {
    comment,
  };
  return context;
}

function createComment(comment: {
  id: number;
  name: string;
  content: string;
  userId: number;
  postId: number;
}) {
  comments.push(comment);
  return "Comment created successfully!";
}

export default { getAllComments, getCommentById, createComment };
