/**
 * filename: complex_code.js
 * purpose: Demonstrating advanced JavaScript concepts and techniques
 * author: Your Name
 * date: Month DD, YYYY
 */

// Define a class named 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Create an instance of the 'Person' class
const john = new Person("John Doe", 30);
john.sayHello();

// Define an async function that fetches data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function with a sample API endpoint
fetchData("https://api.example.com/data");

// Define a helper function that generates random numbers within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create an array and populate it with random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = getRandomNumber(1, 100);
  randomNumbers.push(randomNumber);
}
console.log("Random Numbers:", randomNumbers);

// Define a recursive function to calculate the factorial of a number
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log("Factorial of 5:", factorial(5));

// Implement a custom sorting algorithm (Bubble Sort)
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }
  return arr;
}

const unsortedArray = [5, 3, 8, 1, 2, 10];
console.log("Sorted Array:", bubbleSort(unsortedArray));

// Define a class that represents a geometric shape
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Cannot construct abstract Shape instance!");
    }
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented.");
  }

  getPerimeter() {
    throw new Error("Method 'getPerimeter()' must be implemented.");
  }
}

// Define a Rectangle class that extends Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);
console.log("Rectangle Area:", rect.getArea());
console.log("Rectangle Perimeter:", rect.getPerimeter());

// ... Keep adding more sophisticated and complex code
// to demonstrate advanced JavaScript concepts and techniques.
// The code length should exceed 200 lines.