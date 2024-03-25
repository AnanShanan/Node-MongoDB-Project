# Personal Task Manager API

This is a Personal Task Manager API built with Node.js, Express.js, MongoDB, and Mongoose. It allows users to create, read, update, and delete tasks, as well as organize tasks into categories.

## Features

- User registration and login with JWT authentication
- CRUD operations for tasks and categories
- Querying tasks by status and due date
- Error handling and validation

## Prerequisites

- Node.js (version 12 or above)
- MongoDB (running on localhost or provide a connection URL)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/personal-task-manager-api.git 

2. Navigate to the project directory:

cd personal-task-manager-api

3. Install the dependencies:

npm install

4. Set up the environment variables:
- Create a .env file in the root directory.
- Add the following variables:
  
  MONGODB_URI=your-mongodb-connection-url
  JWT_SECRET=your-secret-key
  

5. Start the server:

npm start

The server will run on http://localhost:5000.

## API Endpoints

### Authentication

- POST /api/auth/signup
- Register a new user.
- Request Body:
 json
 {
   "username": "johndoe",
   "password": "password123",
   "email": "johndoe@example.com"
 }
 
- Response:
 json
 {
   "message": "User registered successfully"
 }
 

- POST /api/auth/login
- Log in and retrieve a JWT token.
- Request Body:
 json
 {
   "username": "johndoe",
   "password": "password123"
 }
 
- Response:
 json
 {
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRjMzg5MzQ5MzJhNTI0ZjRlNGYxMzMiLCJpYXQiOjE1OTg4MTU2NTN9.nTjemagFUauAr_AKgSKTAYFu-_rPv7bgMdl7S5-FJqA"
 }
 

### Users

- GET /api/users
- Get the authenticated user's information.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Response:
 json
 {
   "_id": "5f4c389349324f4e4f133",
   "username": "johndoe",
   "email": "johndoe@example.com"
 }
 

- PATCH /api/users
- Update the authenticated user's information.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Request Body:
 json
 {
   "email": "newemail@example.com"
 }
 
- Response:
 json
 {
   "_id": "5f4c389349324f4e4f133",
   "username": "johndoe",
   "email": "newemail@example.com"
 }
 

- DELETE /api/users
- Delete the authenticated user's account.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Response:
 json
 {
   "message": "User deleted successfully"
 }
 

### Tasks

- POST /api/tasks
- Create a new task.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Request Body:
 json
 {
   "title": "Sample Task",
   "description": "This is a sample task",
   "dueDate": "2023-06-30"
 }
 
- Response:
 json
 {
   "_id": "5f4c3a0e2c0b6d5b1f8c8d1f",
   "title": "Sample Task",
   "description": "This is a sample task",
   "status": "TODO",
   "dueDate": "2023-06-30T00:00:00.000Z",
   "user": "5f4c389349324f4e4f133",
   "createdAt": "2023-06-01T10:30:22.548Z",
   "updatedAt": "2023-06-01T10:30:22.548Z",
   "__v": 0
 }
 

- GET /api/tasks
- Get all tasks of the authenticated user.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Query Parameters:
 - status: Filter tasks by status (e.g., TODO, IN_PROGRESS, COMPLETED).
 - dueDate: Filter tasks by due date (tasks with due date less than or equal to the specified date).
- Response:
 json
 [
   {
     "_id": "5f4c3a0e2c0b6d5b1f8c8d1f",
     "title": "Sample Task",
     "description": "This is a sample task",
     "status": "TODO",
     "dueDate": "2023-06-30T00:00:00.000Z",
     "user": "5f4c389349324f4e4f133",
     "createdAt": "2023-06-01T10:30:22.548Z",
     "updatedAt": "2023-06-01T10:30:22.548Z",
     "__v": 0
   },
   ...
 ]
 

- PATCH /api/tasks/:taskId
- Update a task by ID.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Request Body:
 json
 {
   "title": "Updated Task",
   "status": "IN_PROGRESS"
 }
 
- Response:
 json
 {
   "_id": "5f4c3a0e2c0b6d5b1f8c8d1f",
   "title": "Updated Task",
   "description": "This is a sample task",
   "status": "IN_PROGRESS",
   "dueDate": "2023-06-30T00:00:00.000Z",
   "user": "5f4c389349324f4e4f133",
   "createdAt": "2023-06-01T10:30:22.548Z",
   "updatedAt": "2023-06-01T11:15:00.000Z",
   "__v": 0
 }
 

- DELETE /api/tasks/:taskId
- Delete a task by ID.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Response:
 json
 {
   "message": "Task deleted successfully"
 }
 

### Categories

- POST /api/categories
- Create a new category.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Request Body:
 json
 {
   "name": "Sample Category",
   "description": "This is a sample category"
 }
 
- Response:
 json
 {
   "_id": "5f4c3b1e1d3e7c8d1f9b2c3d",
   "name": "Sample Category",
   "description": "This is a sample category",
   "user": "5f4c389349324f4e4f133",
   "createdAt": "2023-06-01T10:45:30.972Z",
   "updatedAt": "2023-06-01T10:45:30.972Z",
   "__v": 0
 }
 

- GET /api/categories
- Get all categories of the authenticated user.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Response:
 json
 [
   {
     "_id": "5f4c3b1e1d3e7c8d1f9b2c3d",
     "name": "Sample Category",
     "description": "This is a sample category",
     "user": "5f4c389349324f4e4f133",
     "createdAt": "2023-06-01T10:45:30.972Z",
     "updatedAt": "2023-06-01T10:45:30.972Z",
     "__v": 0
   },
   ...
 ]
 

- PATCH /api/categories/:categoryId
- Update a category by ID.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Request Body:
 json
 {
   "name": "Updated Category",
   "description": "This is an updated category"
 }
 
- Response:
 json
 {
   "_id": "5f4c3b1e1d3e7c8d1f9b2c3d",
   "name": "Updated Category",
   "description": "This is an updated category",
   "user": "5f4c389349324f4e4f133",
   "createdAt": "2023-06-01T10:45:30.972Z",
   "updatedAt": "2023-06-01T11:20:00.000Z",
   "__v": 0
 }
 

- DELETE /api/categories/:categoryId
- Delete a category by ID.
- Headers:
 - Authorization: Bearer <your_jwt_token>
- Response:
 json
 {
   "message": "Category deleted successfully"
 }
 

## Error Handling

The API handles errors gracefully and returns appropriate error responses with status codes and error messages. Some common error responses include:

- 400 Bad Request: Indicates that the request was malformed or missing required parameters.
- 401 Unauthorized: Indicates that authentication failed or a valid JWT token was not provided.
- 404 Not Found: Indicates that the requested resource was not found.
- 500 Internal Server Error: Indicates that an unexpected error occurred on the server.

## Authentication

All routes, except for /api/auth/signup and /api/auth/login, require authentication. To authenticate, include the JWT token obtained from the login endpoint in the Authorization header as a Bearer token.

Example:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRjMzg5MzQ5MzJhNTI0ZjRlNGYxMzMiLCJpYXQiOjE1OTg4MTU2NTN9.nTjemagFUauAr_AKgSKTAYFu-_rPv7bgMdl7S5-FJqA

