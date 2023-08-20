const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
    },
    completedAt: {
        type: String,
    },
    completionStatus: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;