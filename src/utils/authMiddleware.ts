import { NextFunction, Request, Response } from "express";
import { verifyToken } from "./jwtUtils";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const decoded = await verifyToken(token);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
