// Problem

// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// Plan
// Variable that stores a user's number
// A prompt to ask for the user's number
// Variable that stores string that will be displayed at end of sequence
// A loop to generate a list of number from 1 - 100
// Identify all numbers divisible by 3
// Replace numbers divisble by 3 with the string "Fizz"
// Identify all numbers divisible by 5
// Replace numbers divisble by 5 with the string "Buzz"
// Provide a user with a prompt that shows that sequence

// Code

// Variable that stores a user's number

let number;

// A prompt to ask for the user's number

function getNumber() {
  number = parseInt(prompt("Give a number between 1 and 100"));
}

// Variable that stores string that will be displayed at end of sequence

let str = "";

// A loop to generate a list of number from 1 - 100

function checkNumber(number) {
  for (let i = 1; i <= number; i++) {
    // Identify all numbers divisible by 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      str += "Fizz Buzz" + ", ";
    } // Identify all numbers divisible by 3
    else if (i % 3 === 0) {
      // Replace numbers divisble by 3 with the string "Fizz"
      str += "Fizz" + ", ";
      // Identify all numbers divisible by 5
    } else if (i % 5 === 0) {
      // Replace numbers divisble by 5 with the string "Buzz"
      str += "Buzz" + ", ";
    } else {
      str += i + ", ";
    }
  }
  str = str.slice(0, -2);
}

// Provide a user with a prompt that shows that sequence

function showNumber() {
  alert(`${str}`);
}

// Execute code for demo purposes
getNumber();
checkNumber(number);
showNumber();
