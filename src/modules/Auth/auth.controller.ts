import { Request, Response } from "express";
import { authService } from "./auth.service";

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginWithEmailAndPassword(req.body, res);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const authController = { loginWithEmailAndPassword, register };
