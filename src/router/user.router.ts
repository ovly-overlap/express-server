import express from "express";
import userController from "../controllers/user.controller.js";

const router = express();
const PREFIX = "/users"

// router.get('/users', authMiddleware, userController.getUsers)  미들웨어를 통해 특정 api 보호
router.get(PREFIX, userController.getUsers);

// export 해야함 님