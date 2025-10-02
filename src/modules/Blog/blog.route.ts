import { Router } from "express";
import { blogController } from "./blog.controller";
import authMiddleware from "../../utils/authMiddleware";

const router = Router();

router.post("/create-blog", authMiddleware, blogController.createBlog);
router.get("/all-blogs", authMiddleware, blogController.getAllBlogs);

export const blogRoute = router;
