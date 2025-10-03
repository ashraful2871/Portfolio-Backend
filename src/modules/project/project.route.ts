import { Router } from "express";
import { projectController } from "./project.controller";
import authMiddleware from "../../utils/authMiddleware";

const router = Router();

router.post("/create-project", projectController.createProject);
router.get("/all-projects", projectController.getAllProjects);
router.get("/single-project/:id", projectController.getSingleProject);

export const projectRoute = router;
