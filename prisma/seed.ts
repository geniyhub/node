import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: 'post1',
        author: 'Author1',
        image: 'https://i.pinimg.com/474x/1e/2e/68/1e2e68ee7d96076a1e7c909c6048da87.jpg',
        description: 'Description for post1',
        commentId: 1,
      },
      {
        title: 'post2',
        author: 'Author2',
        image: 'https://i.pinimg.com/736x/61/cc/5e/61cc5e991ed292fffcf723a7f1e20b35.jpg',
        description: 'Description for post2',
        commentId: 1,
      },
      {
        title: 'post3',
        author: 'Author3',
        image: 'https://i.pinimg.com/236x/70/e8/09/70e809c6e864cf00dfc946f0665b42d3.jpg',
        description: 'Description for post3',
        commentId: 1,
      },
    ],
  });

  await prisma.post.create({
    data: {
      title: 'First post',
      author: 'Konnan Kalk',
      description: 'Description for the first post',
      image: 'https://i.pinimg.com/236x/60/25/b4/6025b4f8fb41648f1cd7d8c558ab2357.jpg',
      commentId: 1,
    },
  });
}
async function createOneComment(){
  const comment = await prisma.comment.create({
    data: {
      postId: 1,
      title: 'Ageres Pirat',
      content: 'Информативно, автор наверное талант'
    }
  })
}


main()
  .then(() => {
    console.log('Database has been seeded.');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

createOneComment().then(() => {
  prisma.$disconnect()
}).catch((err) => {
  console.log(err)
  prisma.$disconnect()
})
