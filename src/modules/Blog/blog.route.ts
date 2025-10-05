import { Router } from "express";
import { blogController } from "./blog.controller";
import authMiddleware from "../../utils/authMiddleware";

const router = Router();

router.post("/create-blog", blogController.createBlog);
router.get("/all-blogs", blogController.getAllBlogs);

export const blogRoute = router;
