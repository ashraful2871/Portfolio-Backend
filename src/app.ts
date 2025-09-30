import cors from "cors";
import express from "express";
import compression from "compression";
const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());

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
