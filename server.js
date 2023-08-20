const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRouter = require("./routes/taskRoutes");
const userRouter = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));

connectDB();

// User Routes
app.use("/api/users", userRouter);

// Task Routes
app.use("/api/tasks", taskRouter);


// Home Route
app.get("/", (req,res) => {
    const response = {
        Success: "Sever is Running (Home)",
        Routes: {
            Home: ["/", "GET"],
            CreateTask: ["/api/tasks", "POST"],
            AllTasks: ["/api/tasks", "GET"],
            SingleTask: ["/api/tasks/:id", "GET"],
            UpdateTask: ["/api/tasks/:id", "PATCH"],
            DeleteTask: ["/api/tasks/:id", "DELETE"]
        }
    };

    const formattedResponse = JSON.stringify(response, null, 3);
    const htmlResponse = `<pre>${formattedResponse}</pre>`;

    res.send(htmlResponse);
});

app.listen(9000 || process.env.PORT, () => {
    console.log("Server Started");
});