const express = require("express");
const userController = require("../controllers/userController");

userRouter = express.Router();

userRouter.post("/register", userController.createUser);
userRouter.get("/", userController.allUsers);
userRouter.get("/:id", userController.singleUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/logout", userController.logoutUser);


module.exports = userRouter;