import express from "express";
import userController from "../controllers/user.controller.js";

const router = express();

// router.get('/users', authMiddleware, userController.getUsers)  미들웨어를 통해 특정 api 보호
router.get("/users", userController.getUsers);

// export 해야함 님