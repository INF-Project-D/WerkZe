import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log('!!! WARNING: This will delete all data in the database !!!');
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      email: 'admin@cool.app',
      password:
        '$argon2d$v=19$m=16,t=2,p=1$M1RlTE1wT3RPQjdNZEJJUA$BGJxe3HaP4bLjeaIRoCtFA',
      role: UserRole.ADMIN,
      firstName: 'Admin',
      lastName: 'Admin',
      phoneNumber: '0000000000',
    },
  });
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
