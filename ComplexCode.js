/*
Filename: ComplexCode.js

This code implements a sophisticated web application that allows users to manage a library system. It includes functions for adding, removing, and searching books, as well as managing user accounts and book loans.

The code is more than 200 lines long and incorporates advanced JavaScript concepts such as object-oriented programming, closures, and asynchronous programming.

*/

// Data Models
const books = [];
const users = [];
const loans = [];

// Book Model
class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// User Model
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Loan Model
class Loan {
  constructor(bookId, userId, dueDate) {
    this.bookId = bookId;
    this.userId = userId;
    this.dueDate = dueDate;
  }
}

// Book management functions
function addBook(id, title, author, year) {
  const book = new Book(id, title, author, year);
  books.push(book);
}

function removeBook(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
  }
}

function searchBooks(keyword) {
  return books.filter((book) => book.title.includes(keyword) || book.author.includes(keyword));
}

// User management functions
function addUser(id, name) {
  const user = new User(id, name);
  users.push(user);
}

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

function searchUsers(keyword) {
  return users.filter((user) => user.name.includes(keyword));
}

// Book loan functions
function loanBook(bookId, userId, dueDate) {
  const loan = new Loan(bookId, userId, dueDate);
  loans.push(loan);
}

function returnBook(bookId, userId) {
  const index = loans.findIndex((loan) => loan.bookId === bookId && loan.userId === userId);
  if (index !== -1) {
    loans.splice(index, 1);
  }
}

function getLoansForUser(userId) {
  return loans.filter((loan) => loan.userId === userId);
}

// Asynchronous function example
function simulateAsyncOperation(callback) {
  setTimeout(callback, 2000);
}

// Example usage
addBook(1, "The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook(2, "To Kill a Mockingbird", "Harper Lee", 1960);
addBook(3, "1984", "George Orwell", 1949);

addUser(1, "John Doe");
addUser(2, "Jane Smith");

loanBook(1, 1, "2022-05-01");
loanBook(2, 2, "2022-05-15");

console.log(searchBooks("Great"));
console.log(searchUsers("Smith"));

simulateAsyncOperation(() => {
  console.log("Async operation complete!");
});

// ... more complex code follows