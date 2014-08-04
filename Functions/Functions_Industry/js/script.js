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