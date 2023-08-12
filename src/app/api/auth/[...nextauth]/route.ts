import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 60, //5 mins //หมดอายุ หน่วย second
  },
  // useSecureCookies: true, // สำหรับ production และใช้ https
  providers: [
    CredentialsProvider({
      credentials: {}, // เราไม่ใช้ เราจะใช้หน้า Login เราเอง
      async authorize(credentials, req) {
        //credentials จะได้ข้อมูลจากหน้า login จาก fn signin() เช่น credentials.email และ credentials.password
        // const result = await signIn("credentials", {
        //   redirect: false,
        //   email: data.email,
        //   password: data.password,
        // });

        //1.รับข้อมูลจากหน้า login
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //2.หา user โดยใช้ email
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (user === null) {
          throw new Error("ไม่พบผู้ใช้นี้ในระบบ");
        }

        //3.check password
        const isValid = await compare(password, user.password); //password -> form , user.password -> จาก db
        if (!isValid) {
          throw new Error("รหัสผ่านไม่ถูกต้อง");
        }

        return {
          id: user.id.toString(),
          name: user.fullname,
          email: user.email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
