const Task = require("../models/tasks");

const createTask = async(req,res) => {
    const task = new Task({
        title : req.body.title,
        desc : req.body.desc,
        createdAt : new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'}),
        updatedAt : ""
    });

    try{
        const newTask = await task.save();
        return res.status(200).send({
            "success": true,
            "error_code": null,
            "message": "Successfully created a task",
            "data": [newTask]
        });
    } 
    catch(err){
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": []
        });
    }
};

const fetchAllTasks = async(req,res) => {
    try {
        const tasks = await Task.find();
        return res.status(201).send({
            "success": true,
            "error_code": null,
            "message": "Successfully fetched all tasks",
            "data": tasks
        });
    } catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": []
        });
    }
};

const fetchSingleTask = async(req,res) => {
    try {
        let id = req.params.id;
        const task = await Task.findById(id);

        if(!task){
            return res.send({
            "success": false,
            "error_code": 404,
            "message": "Task does not exist",
            "data": []
            });
        }
            
        return res.status(201).send({
            "success": true,
            "error_code": null,
            "message": "Successfully fetched the task",
            "data": [task]
        });
    } catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": []
        });
    }
};

const updatedTask = async(req,res) => {
    try {
        let id = req.params.id;
        const task = await Task.findById(id);

        if(!task){
            return res.send({
            "success": false,
            "error_code": 404,
            "message": "Task does not exist",
            "data": []
            });
        }

        task.title = req.body.title;
        task.desc = req.body.desc;
        task.updatedAt = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'});

        const updatedTask = await task.save();

        return res.status(201).send({
            "success": true,
            "error_code": null,
            "message": "Successfully updated the task",
            "data": [updatedTask]
        });
    } catch (err) {
        return res.send({
            "success": false,
            "error_code": 500,
            "message": err.message,
            "data": []
        });
    }
};

const deleteTask = async(req,res) => {
    try{
        let id = req.params.id;
        const task = await Task.findById(id);

        if(!task){
            return res.send({
                "success" : false,
                "error_code": 404,
                "message": "Task does not exist",
                "data": []
            });
        }

        await task.deleteOne();
        return res.send({
            "success" : true,
            "error_code": null,
            "message": "Successfully deleted the task",
            "data": []
        });
    } catch(err){
        return res.send({
            "success" : false,
            "error_code": 500,
            "message": err.message,
            "data": []
        });
    }
};

module.exports = {
    createTask,
    fetchAllTasks,
    fetchSingleTask,
    updatedTask,
    deleteTask
};