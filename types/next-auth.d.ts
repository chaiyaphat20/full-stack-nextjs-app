import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    programCode: string;
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
      [key: string]: string;
    };
  }
}
