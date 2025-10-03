import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload: Prisma.ProjectCreateInput) => {
  const blog = await prisma.project.create({
    data: payload,
  });
  return blog;
};

const getAllProjects = async () => {
  const projects = await prisma.project.findMany();
  return projects;
};

const getSingleProject = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: { id: Number(id) },
  });
  return project;
};

export const projectService = {
  createProject,
  getAllProjects,
  getSingleProject,
};
