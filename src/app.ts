import cors from "cors";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import { authRoute } from "./modules/Auth/auth.route";
import { userRoute } from "./modules/User/user.route";
const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
