/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Conditionals_Industry
*/

// Conditionals - Industry Assignment


//Prompt user for name
var name = prompt("Please, type in your name:");

//Test if the variable is blank

if(name===""){
    //The user left it blank

    //Reprompt the user for name
    name = prompt("Please, type in your name. Do not leave blank.");
}
console.log(name);

//Determine if user is old enough to enter website

//Create variable and prompt for user age

var age = prompt("Hello, "+name+"! Please, enter your age:");

//Test if it is a number

if(isNaN(age)) {
    console.log("Inside of Number Test");

    //Remind the user to type in their age in numbers

    var age = prompt("Enter you age only as a NUMBER:");
}
console.log(age);















