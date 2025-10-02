import { Request, Response } from "express";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(400).json({ message: "User not authenticated" });
    }
    const result = await blogService.createBlog({ ...req.body, userId });
    res.status(201).json(result);
  } catch (error: any) {
    res.status(501).json(error);
  }
};

export const blogController = {
  createBlog,
};
