/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Expressions_Wacky
*/


//Find out how many ounces of milk will take a toddler to fall asleep for a full night (8 hours on average).


//Prompt user for name

var name = prompt("Please, type in your name.");

console.log(name);

//Create an alert that the user will see
alert("Welcome, " +name+"! Let's figure out how many ounces of milk will take for your toddler to fall asleep for the night...");


//Prompt user for ounces of milk their toddler drinks before a nap

var nap = prompt("How many ounces does your toddler drink before a nap?");
console.log(nap);


//Prompt user for how many hours their toddler's nap is

var napHours = prompt("For how many hours does your toddler nap?");
console.log(napHours);


//Calculate total ounces of milk will take a toddler to fall asleep for 8 hours

var totalOunces = (8 % Number(nap)) * Number(nap);
console.log(totalOunces);

//Create an alert that the user will see
alert("Your toddler will drink " +totalOunces+".");
