import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

router.post("/login", authController.loginWithEmailAndPassword);
router.post("/register", authController.register);

export const authRoute = router;
