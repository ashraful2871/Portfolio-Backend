import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createBlog = async (payload: Prisma.BlogCreateInput) => {
  const blog = await prisma.blog.create({
    data: payload,
  });
  return blog;
};
const getAllBlogs = async () => {
  const blog = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      user: true,
      userId: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return blog;
};

export const blogService = {
  createBlog,
  getAllBlogs,
};
