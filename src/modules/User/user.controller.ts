import { Request, Response } from "express";
import { userService } from "./user.service";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userController = { getAllUser };
