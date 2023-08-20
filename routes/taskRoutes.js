const express = require("express");
const taskController = require("../controllers/taskController");

taskRouter = express.Router();

taskRouter.post("/", taskController.createTask);
taskRouter.get("/", taskController.fetchAllTasks);

taskRouter.get("/completed", taskController.allCompletedTasks);
taskRouter.get("/uncompleted", taskController.allUncompletedTasks);

taskRouter.get("/:id", taskController.fetchSingleTask);
taskRouter.patch("/:id", taskController.updateTaskDetails);
taskRouter.delete("/:id", taskController.deleteTask);

taskRouter.post("/:id/complete", taskController.completeTask);
taskRouter.post("/:id/uncomplete", taskController.uncompleteTask);


module.exports = taskRouter;