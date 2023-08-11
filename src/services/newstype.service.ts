import prisma from "@/lib/prisma";
import { NewsType, Prisma } from "@prisma/client";

export async function findAllNewsType(): Promise<NewsType[]> {
  return await prisma.newsType.findMany({
    orderBy: { id: "desc" },
  });
}

export async function findOneNewsType(id: number): Promise<NewsType | null> {
  return await prisma.newsType.findUnique({ where: { id } });
}

export async function createNewsType(
  data: Prisma.NewsTypeCreateInput
): Promise<void> {
  await prisma.newsType.create({ data: { title: data.title } });
}

export async function updateNewsType(
  id: number,
  data: Prisma.NewsTypeUpdateInput
): Promise<NewsType> {
  return await prisma.newsType.update({
    where: { id: id },
    data: data,
  });
}

export async function removeNewsType(id: number): Promise<NewsType> {
  return await prisma.newsType.delete({
    where: { id: id },
  });
}
