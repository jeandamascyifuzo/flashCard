// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {

    const newLink = await prisma.product.create({
    data: {
        country: 'Fullstack tutorial for GraphQL',
        productName: 'www.howtographql.com',
        lifetime:"12/23/3444"
    },
  })
    const allLinks = await prisma.product.findMany();
    console.log(allLinks);
}



// 4
main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });