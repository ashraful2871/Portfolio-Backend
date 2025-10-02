import { Router } from "express";
import { blogController } from "./blog.controller";
import authMiddleware from "../../utils/authMiddleware";

const router = Router();

router.post("/create-blog", authMiddleware, blogController.createBlog);

export const blogRoute = router;
