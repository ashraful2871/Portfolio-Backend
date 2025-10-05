"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_route_1 = require("./modules/Auth/auth.route");
const user_route_1 = require("./modules/User/user.route");
const blog_route_1 = require("./modules/Blog/blog.route");
const project_route_1 = require("./modules/project/project.route");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true, // This is crucial
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
}));
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1/auth", auth_route_1.authRoute);
app.use("/api/v1/user", user_route_1.userRoute);
app.use("/api/v1/blog", blog_route_1.blogRoute);
app.use("/api/v1/project", project_route_1.projectRoute);
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
exports.default = app;
