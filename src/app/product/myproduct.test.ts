import ProductService from './myproduct';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const productService = new ProductService();

describe('ProductService', () => {
  beforeAll(async () => {
    // ลบข้อมูลในตารางก่อนทดสอบ
    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    // หลังการทดสอบเสร็จแล้วให้ปิดการเชื่อมต่อกับ Prisma
    await prisma.product.deleteMany();
    await prisma.$disconnect();
  });

  test('should add a product', async () => {
    const product = await productService.addProduct('Test Product', 100.0, 'Test Category');
    expect(product).toHaveProperty('id');
    expect(product.name).toBe('Test Product');
    expect(product.price).toBe(100.0);
    expect(product.category).toBe('Test Category');
  });

  test('should delete a product', async () => {
    // เพิ่มสินค้าก่อนทำการทดสอบลบ
    const product = await productService.addProduct('Product to Delete', 50.0, 'Delete Category');
    const deletedProduct = await productService.deleteProduct(product.id);
    
    // ตรวจสอบว่า id ของสินค้าถูกลบไปแล้ว
    expect(deletedProduct.id).toBe(product.id);

    // ตรวจสอบว่าไม่มีสินค้านี้ในฐานข้อมูล
    const foundProduct = await prisma.product.findUnique({
      where: { id: product.id },
    });
    expect(foundProduct).toBeNull();
  });
});
