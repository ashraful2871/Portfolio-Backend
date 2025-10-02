import { Request, Response } from "express";
import { projectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await projectService.createProject(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(501).json(error);
  }
};
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await projectService.getAllProjects();
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
    res.status(501).json(error);
  }
};

export const projectController = { createProject, getAllProjects };
