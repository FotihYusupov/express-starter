const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const userController = require("../controller/userController");
const userRoutes = Router();

userRoutes.get("/get-me", authMiddleware, userController.getMe);
userRoutes.post("/login", authMiddleware, userController.login);

module.exports = userRoutes;