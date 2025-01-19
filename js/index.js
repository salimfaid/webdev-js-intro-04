// Prevent us from attempting to use variables
// that are not declared
"use strict"

// Example for If/Else If/Else
let healthPoints = 7;  // Change this value to experiment.

if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else if (healthPoints < 10 && healthPoints >= 5) {
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}

// Experiment 2: Create a couple of if statements that are meaningful.

// Check if a number is positive or negative
let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// Experiment 3: Create a couple of if/else statements that are meaningful.

// Check if the person is an adult or a minor
let age = 20;  // Modify the age to test
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Experiment 4: Create a couple of if/else if/else statements that are meaningful.

// Check if a number is divisible by 3, 5, or both
let numberToCheck = 15;  // Modify to experiment
if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
} else if (numberToCheck % 3 === 0) {
    console.log("The number is divisible by 3.");
} else if (numberToCheck % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is divisible by neither 3 nor 5.");
}
