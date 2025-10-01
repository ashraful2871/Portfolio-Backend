import { prisma } from "../../config/db";

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      photo: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const userService = { getAllUser };
