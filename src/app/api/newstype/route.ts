import { createNewsType, findAllNewsType } from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await findAllNewsType();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Prisma.NewsTypeCreateInput;
  const data = await createNewsType(body);
  return NextResponse.json({ data :data , message:"เพิ่มข้อมูลสำเร็จ"}, { status: 201 });
}
