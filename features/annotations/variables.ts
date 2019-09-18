let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMatch = null;
let nothing = undefined;

// built in objects
const now = new Date();

// Array
let colors = ['red', 'green', 'blue'];

const myNumbers = [1, 2, 3];
const truths = [true, true, false];

// Classes
class Car {}
const car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20
};

console.log(point);

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'blue'];

// 3) Variables whose type cannot be inferred correctly
let numberAboveZero: number | boolean = false;
numberAboveZero = 1;
