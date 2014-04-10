// JavaScript File

//Figure Out How Old We Currently Are
// & How Old We Will Be In A Given Amount Of Years

//Prompt user for name

var name = prompt("Please type in your name.");

console.log(name);

//Create an alert that the user will see

alert("Welcome " +name+"! We have one more question for you.");

//Get the users birth year
var yearBorn = prompt("What year were you born?");

console.log(yearBorn);

//Variable for current Year
var currentYear = 2014;

//Figure out how old the user is
//Create a variable to hold this answer

var age = currentYear - yearBorn;

console.log(age);

//Alert the user on how old they are
alert(name+" you are "+age+" years old.");


//Lets make it more complex

//Ask the user for a future time.
var yearsMore = prompt("How many years in the future do you want to check?");

console.log(yearsMore);

//Calculate our future age

var futureAge = age + Number(yearsMore);

console.log(futureAge);


console.log(name+" you are currently "+age+" in "+yearsMore+" years you will be "+futureAge+".");

alert(name+" you are currently "+age+" in "+yearsMore+" years you will be "+futureAge+".");