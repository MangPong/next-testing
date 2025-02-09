import { PrismaClient, User } from "@prisma/client";
import { IloginService } from "./iservices";
import * as jose from "jose";

export class LoginService implements IloginService {
  async getUserFormSession(session: string): Promise<User | null> {
    const secret = process.env.JWT_SECRET || "your-secret-key";
    const bcryptSecret = jose.base64url.decode(secret);

    try {
      const { payload } = await jose.jwtDecrypt(session, bcryptSecret);

      const time = Date.now();
      if (payload.exp && time < payload.exp * 1000) {
        const username = payload.username as string | undefined;

        if (username) {
          const prisma = new PrismaClient();
          try {
            const user = await prisma.user.findFirst({
              where: { username },
            });
            return user;
          } finally {
            await prisma.$disconnect();
          }
        }
      }
      return null;
    } catch (error) {
      console.error("Error decrypting session:", error);
      return null;
    }
  }
}
