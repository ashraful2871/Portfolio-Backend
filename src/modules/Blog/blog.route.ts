import { Router } from "express";
import { blogController } from "./blog.controller";

const router = Router();

router.post("/create-blog", blogController.createBlog);

export const blogRoute = router;
