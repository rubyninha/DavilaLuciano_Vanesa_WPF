/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Expressions_Personal 
*/


// Expressions - Personal Assignment

//Figure out the time of arrival traveling from Washington, DC to Orlando, FL by car

//Prompt user for name

var name = prompt("Please, type in your name.");

console.log(name);

//Create an alert that the user will see
alert("Welcome, " +name+"! We have a few questions for you.");

//Prompt user for starting time

var startTime = prompt("Please, enter your estimated travel start time using 24-hour notation. (i.e. If it's at 9:00 AM, write 0900).");

console.log(startTime);

//Get the amount of hours the trip will take
var travelHours = prompt("How many hours does it take to drive from Washington, DC to Orlando, FL? (i.e. If it's 16 hours, input 1600. If it's 16 hours and 30 minutes, input 1630.");

console.log(travelHours);

//Figure out the time the user will take in rest stops
var restStops = prompt("How many minutes or hours will you take at rest stops in total? Remember to input your answer in 24-hour notation. (i.e. If your answer is 30 minutes, input 0030. If your answer is 2 hours, input 0200");

console.log(restStops);

