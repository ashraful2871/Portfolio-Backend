"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoute = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.post("/create-blog", blog_controller_1.blogController.createBlog);
router.get("/all-blogs", blog_controller_1.blogController.getAllBlogs);
exports.blogRoute = router;
