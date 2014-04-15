// Expressions - Personal Assignment

//Figure out the time of arrival traveling from Washington, DC to Orlando, FL by car

//Prompt user for starting time

var startTime = prompt("Please, enter your estimated start time using 24-hour notation. (i.e. If it's at 9:00 AM, write 0900).");

console.log(startTime);

//Create an alert that the user will see

alert("Your estimated start time is "+startTime+".");

//Get the amount of hours the trip will take
var totalHours = prompt("How many hours does it take to drive from Washington, DC to Orlando, FL? (i.e. If it's 16 hours, input 1600. If it's 16 hours and 30 minutes, input 1630.");

console.log(totalHours);

//Figure out the time the user will take in rest stops
var restStops = prompt("How many minutes will you take at rest stops? Remember to input your answer in 24-hour notation. (i.e. If your answer is 30 minutes, input 0030.");

console.log(restStops);

//Figure out how many times the user will make 30-minute rest stops