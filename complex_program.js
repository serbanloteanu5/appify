//filename: complex_program.js

/**************************************************************
* Complex Program
* 
* Description: This program demonstrates a complex implementation
* of a task management system. It allows users to create, edit,
* and delete tasks, as well as assign them to different users
* and track their progress.
**************************************************************/

// Global Variables
let users = {};
let tasks = {};

// User Class
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.tasks = [];
  }

  addTask(taskId) {
    this.tasks.push(taskId);
  }

  removeTask(taskId) {
    const index = this.tasks.indexOf(taskId);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}

// Task Class
class Task {
  constructor(id, title, description, status, assigneeId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.assigneeId = assigneeId;
  }

  assignTo(user) {
    if (users[user]) {
      this.assigneeId = user;
    } else {
      console.log("User not found.");
    }
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

// Utility Functions
function createUser(id, name, email) {
  if (!users[id]) {
    const user = new User(id, name, email);
    users[id] = user;
    console.log(`User "${name}" created.`);
  } else {
    console.log(`User with ID ${id} already exists.`);
  }
}

function createTask(id, title, description, assigneeId) {
  if (!tasks[id]) {
    const task = new Task(id, title, description, "New", assigneeId);
    tasks[id] = task;
    users[assigneeId].addTask(id);
    console.log(`Task "${title}" created.`);
  } else {
    console.log(`Task with ID ${id} already exists.`);
  }
}

function deleteTask(id) {
  if (tasks[id]) {
    const task = tasks[id];
    const assigneeId = task.assigneeId;
    users[assigneeId].removeTask(id);
    delete tasks[id];
    console.log(`Task "${task.title}" deleted.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function printTaskDetails(id) {
  if (tasks[id]) {
    const task = tasks[id];
    const assignee = users[task.assigneeId];
    console.log(`Task ID: ${task.id}`);
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log(`Assignee: ${assignee.name}`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Usage Example
createUser(1, "John Doe", "john@example.com");
createUser(2, "Jane Smith", "jane@example.com");

createTask(1, "Implement login", "Implement user login functionality", 1);
createTask(2, "Build homepage", "Design and build the homepage", 1);
createTask(3, "Fix bugs", "Fix reported bugs in the system", 2);

tasks[1].updateStatus("In Progress");
tasks[2].updateStatus("Completed");

tasks[1].assignTo(2);

printTaskDetails(1);

deleteTask(2);

printTaskDetails(2);

/**************************************************************
* This is just a sample code to demonstrate a complex program.
* In a real-world scenario, the implementation would include
* data persistence, input validation, authentication, and more.
* Use this code as a starting point and customize it according
* to your specific requirements.
**************************************************************/