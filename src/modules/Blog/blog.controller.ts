import { Request, Response } from "express";
import { blogService } from "./blog.service";

const createBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.createBlog(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(501).json(error);
  }
};
const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await blogService.getAllBlogs();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(501).json(error);
  }
};

export const blogController = {
  createBlog,
  getAllBlogs,
};
