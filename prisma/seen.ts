import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // เพิ่มผู้ใช้ใหม่
    await prisma.user.create({
        data: {
            username: 'admin',
            password: 'admin', // หรือเก็บรหัสผ่านเข้ารหัส
        },
    });

    await prisma.user.create({
        data: {
            username: 'user',
            password: 'user', // หรือเก็บรหัสผ่านเข้ารหัส
        },
    });
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
