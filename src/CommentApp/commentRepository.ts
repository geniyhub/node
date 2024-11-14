import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

async function getAllComments() {
  try {
    const comments = await client.comment.findMany();
    return comments;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        console.log(err.message);
        throw err;
      }
    }
  }
}

async function getCommentById(id: number) {
  const comment = await client.comment.findUnique({
    where: { id: id },
  });
  return comment;
}

async function createComment(data: {
  name: string;
  content: string;
  img?: string;
  userId: number;
  postId: number;
}) {
  try {
    const comment = await client.comment.create({ data });
    return comment;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        console.log(err.message);
        throw err;
      }
    }
  }
}

const commentRepository = {
  getAllComments,
  getCommentById,
  createComment,
};

export default commentRepository;