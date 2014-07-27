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

var age = prompt("Hello, "+name+"! How old are you?");

//Test if it is a number

if(isNaN(age)) {
    console.log("Inside of Number Test");

    //Remind the user to type in their age in numbers

    var age = prompt("Please, enter you age only as a NUMBER:");
}
console.log(age);

var enterSite;

//If user is 18 years old and up, they can enter the site, otherwise they'll have to come back when they turn 18
enterSite = (age < 18) ? "Oops! Sorry, "+name+". Looks like you'll have to come back when you turn 18!" : "Welcome, "+name+"! You can enter and enjoy this website.";
console.log(enterSite);













