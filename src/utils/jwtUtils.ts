import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, secret, { expiresIn: "10D" });
};

export const verifyToken = async (token: string): Promise<JwtPayload> => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
