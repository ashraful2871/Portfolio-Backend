import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, secret, { expiresIn: "10D" });
};

export const verifyToken = async (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error("invalid or expire Token");
  }
};
