/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Functions_Industry
*/

// Functions - Industry Assignment

//Create a function that will calculate the amount a web designer will charge a client by the hours they have worked


//Ask the user for their hourly pay rate

var hourRate = prompt("Please, enter your hourly rate:\n(i.e. $35, enter 35)");

// Validate using while loop
while(isNaN(hourRate) || hourRate==="") {
    //Re-prompt the user
    hourRate = prompt("Please, enter your hourly rate in form of a number.");
}


//Prompt user for their hourly pay rate

var totalHours = prompt("Please, enter total amount of hours you worked:");

// Validate using while loop
while(isNaN(totalHours) || totalHours==="") {
    //Re-prompt the user
    totalHours = prompt("Please, nter total amount of hours you worked in form of a number.");
}

// Call the function
// Create a variable to "catch" the user input
var total = calcBalance(hourRate, totalHours);
console.log("You should charge your client $"+total);

// Create a function that will calculate the total balance
// Create parameters for Function
function calcBalance(r, h) {
    var balance = r * h;
    return balance;//function spitting the info out
}
console.log(total);

// Create alert that user can see
alert("You should charge your client $"+total+" for your services.");