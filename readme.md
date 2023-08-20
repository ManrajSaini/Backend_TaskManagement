# Problem Statement

- Develop a backend application using Node.js, Express.js, and MongoDB to create a basic task management system. The API should allow users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

# API Endpoints

- POST /api/tasks
  Create a new task.
  Input: Task Title, Description
  Return: Task ID, Title, Description, Created Timestamp

- GET /api/tasks/:id
  Retrieve details of a specific task based on its ID.
  Return: Task ID, Title, Description, Created Timestamp

- GET /api/tasks
  Retrieve a list of all tasks.
  Return: List of tasks with basic details including ID, Title

- PUT /api/tasks/:id
  Update the details of an existing task using its ID.
  Input: Task Title, Description
  Return: Updated task details including ID, Title, Description, Last Modified Timestamp

- DELETE /api/tasks/:id
  Delete a task based on its ID.
  Return: Confirmation message

- The application will provide a simple interface to manage tasks, allowing users to create new tasks, view task details, update existing tasks, and delete tasks. The data will be stored in a MongoDB database, and the API should be designed to ensure the basic functionality of task management while adhering to best practices in backend development.
