import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("user not found");
  }

  if (password === user.password) {
    return user;
  } else {
    throw new Error("INCORRECT PASSWORD");
  }
};

const register = async (payload: Prisma.UserCreateInput): Promise<User> => {
  try {
    const createUser = await prisma.user.create({
      data: payload,
    });

    return createUser;
  } catch (error) {
    throw new Error("Failed to create user.");
  }
};

export const authService = { loginWithEmailAndPassword, register };
