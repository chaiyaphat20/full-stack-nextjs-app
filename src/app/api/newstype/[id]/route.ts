import {
  findOneNewsType,
  removeNewsType,
  updateNewsType,
} from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  params: { params: { id: string } }
) {
  const data = await findOneNewsType(Number(params.params.id));
  if (!data) {
    return NextResponse.json(
      { message: "ไม่พบข้อมูลนี้ในระบบ" },
      { status: 404 }
    );
  }
  return NextResponse.json(data);
}

export async function PUT(
  req: NextRequest,
  params: { params: { id: string } }
) {
  const data = await findOneNewsType(Number(params.params.id));
  if (!data) {
    return NextResponse.json(
      { message: "ไม่พบข้อมูลนี้ในระบบ" },
      { status: 404 }
    );
  }

  //update
  const bodyJson = (await req.json()) as Prisma.NewsTypeUpdateInput;
  const dataUpdate = await updateNewsType(+params.params.id, bodyJson);
  return NextResponse.json(dataUpdate);
}

export async function DELETE(
  req: NextRequest,
  params: { params: { id: string } }
) {
  const data = await findOneNewsType(Number(params.params.id));
  if (!data) {
    return NextResponse.json(
      { message: "ไม่พบข้อมูลนี้ในระบบ" },
      { status: 404 }
    );
  }

  //update
  await removeNewsType(+params.params.id);
  return NextResponse.json({ message: "ลบข้อมูลสำเร็จ" });
}
