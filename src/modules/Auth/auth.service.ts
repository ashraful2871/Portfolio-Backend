import { Prisma, User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../config/db";

const loginWithEmailAndPassword = (req: Request, res: Response) => {
  return {};
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
