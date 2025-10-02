import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";
import { generateToken } from "../../utils/jwtUtils";
import { Response } from "express";

const loginWithEmailAndPassword = async (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  res: Response
) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("user not found");
  }

  if (password === user.password) {
    const token = generateToken(user?.id);
    res.cookie("token", token, { httpOnly: true, secure: true }); // Set token as a cookie
    res.status(200).json({ message: "Logged in successfully" });
    return { ...user, token };
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
