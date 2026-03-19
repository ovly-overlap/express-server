import express from "express";
import * as authController from "../controllers/auth.controller.ts";


const router = express.Router();


router.post("/auth", authController.status);
router.post("/auth/register", authController.register);
router.get("/auth/login", authController.login);
router.get("/auth/logout", authController.logout);

export default router;