# task Management System 

## what is task Management System ?
it is a simple system that allows you to create your task with title and desc and you mark your task as completed or delete your task , also you can search for a speceific task 



## features 
View list of your tasks and filters to make searching process easier 
Add new task 
Mark your task as completed 
Delete your task if you don't need it anymore 


## technologies 
it is a fullstack project using node.js and express for backend side and react for frontend side 

## backend 
1- node.js with Express
2- Database MongoDb
3- you can use apis without using frontend interface -> API EndPoints :
- **GET /tasks** = http://localhost:5000/tasks 
- **POST /tasks** = http://localhost:5000/tasks 
- **PUT /tasks/:id** = http://localhost:5000/tasks/1
- **DELETE /tasks/:id** = http://localhost:5000/tasks/1

**Task Model** :
- `_id` : unique identifier 
- `title` : short title for task required (string) 
- `description` : optional description for your task (string)
- `completed` : boolean to indicate if the task is completed (boolean) default false 
- `created_at` : timestamp when the task was created (timestamp)

## Frontend 
**React** to provide a familier user interface 
- Display a list of tasks and filters to search
- you have 2 buttons to check task as completed and deleted
- a form to add new task 

**Styling** use bootstrap and css for styling and layout 

## Installation 

**Backend** setup Node.js and express 
git clone https://github.com/rawannabil/taskManagerList

**backend** :
- cd task-manager-backend
- npm install
- npm install cors
- npm start 
- the server will be running on http://localhost:5000

**frontend** in new terminal :
- cd task-manager-frontend
- npm install
- npm install bootstrap
- npm install react-router-dom
- npm start
- the frontend interface will be running on http://localhost:3000





