import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        name: 'post1',
        author: 'Author1',
        description: 'Description for post1',
        date: new Date('2023-10-13').toISOString(),
      },
      {
        name: 'post2',
        author: 'Author2',
        description: 'Description for post2',
        date: new Date('2023-10-12').toISOString(),
      },
      {
        name: 'post3',
        author: 'Author3',
        description: 'Description for post3',
        date: new Date('2023-10-11').toISOString(),
      },
    ],
  });

  await prisma.post.create({
    data: {
      name: 'First post',
      author: 'Konnan Kalk',
      description: 'Description for the first post',
      date: new Date().toISOString(),
    },
  });
}
async function createOneComment(){
  const comment = await prisma.comment.create({
    data: {
      postId: 1,
      name: 'Ageres Pirat',
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
