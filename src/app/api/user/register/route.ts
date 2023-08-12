import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash, hashSync } from "bcrypt";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Prisma.UserCreateInput;
  // const data = await createNewsType(body);
  //1.check email ซ้ำ
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user) {
    return NextResponse.json({ message: "Email ซ้ำ" }, { status: 400 });
  }

  //2.เข้ารหัส password
  const salt = await genSalt(10);
  const hashPassword = hashSync(body.password, salt);
  body.password = hashPassword;

  //3.เพิ่มข้อมูล
  await prisma.user.create({ data: body });
  return NextResponse.json({ message: "สมัครสามาชิกสำเร็จ" }, { status: 201 });
}
