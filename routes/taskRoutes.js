const express = require("express");
const taskController = require("../controllers/taskController");

taskRouter = express.Router();

taskRouter.post("/tasks", taskController.createTask);
taskRouter.get("/tasks", taskController.fetchAllTasks);

taskRouter.get("/tasks/completed", taskController.allCompletedTasks);
taskRouter.get("/tasks/uncompleted", taskController.allUncompletedTasks);

taskRouter.get("/tasks/:id", taskController.fetchSingleTask);
taskRouter.patch("/tasks/:id", taskController.updateTaskDetails);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

taskRouter.post("/tasks/:id/complete", taskController.completeTask);
taskRouter.post("/tasks/:id/uncomplete", taskController.uncompleteTask);




module.exports = taskRouter;