"use strict";

// 1. Create an immutable variable that stores the reference to the paragraph with id="response".
const responseParagraph = document.getElementById('response');

// 2. Create a mutable variable called age, but do not assign it a value.
let age;

// 3. Write the conditional logic inside the checkAgeAndRespond function.
function checkAgeAndRespond() {
    // Retrieve the value from the input field and parse it as an integer
    age = parseInt(document.getElementById('age-input').value);
    
    // Check the age and display the corresponding message
    if (age >= 21) {
        responseParagraph.textContent = "You can vote and purchase alcohol.";
    } else if (age >= 18) {
        responseParagraph.textContent = "You can vote, but you cannot purchase alcohol.";
    } else {
        responseParagraph.textContent = "You cannot vote and you cannot purchase alcohol.";
    }
}

// 4. Add an event listener to the "Submit" button to call checkAgeAndRespond function on click
document.getElementById('submission-btn').addEventListener('click', checkAgeAndRespond);
