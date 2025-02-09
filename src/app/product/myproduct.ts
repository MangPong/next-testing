// productSV.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProductService {
  async addProduct(name: string, price: number, category: string) {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        category,
      },
    });
    return product;
  }

  async deleteProduct(id: number) {
    const product = await prisma.product.delete({
      where: { id },
    });
    return product;
  }
}

export default ProductService;
