const express = require("express");
const taskController = require("../controllers/taskController");

taskRouter = express.Router();

taskRouter.post("/tasks", taskController.createTask);
taskRouter.get("/tasks", taskController.fetchAllTasks);
taskRouter.get("/tasks/:id", taskController.fetchSingleTask);
taskRouter.patch("/tasks/:id", taskController.updatedTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

module.exports = taskRouter;