/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
GoTo Training Example Week #2
*/

//alert("Testing 1,2,3");

// Create a js file that will tell us how old we are

//Figure Out How Old We Currently Are
// & How Old We Will Be In A Given Amount Of Years

//Create a variable to hold the person's name

var name = prompt("Please type in your name.");

//Console.log out that name
console.log(name);

//Alert the user and tell him/her hi

alert("Welcome, " +name+"! We have a few more questions for you.");

//Create variable and prompt user for year of birth
var yearBorn = prompt("What year were you born?");

console.log(yearBorn);

//Create a variable for current Year
var currentYear = 2014;

//Calculate the person's age - save that calculation as a variable!

var age = currentYear - yearBorn;
console.log(age);

//Let's tell the user how old they are
alert(name+", you are "+age+" years old.");
console.log(name+", you are "+age+" years old.");

//Lets make it more complex

//How old you will be in future

//Prompt user for how many years in the future
var yearsMore = prompt("How many years in the future would you like?");
console.log(yearsMore);


//Prompting returns a STRING!!! Not a number!!
//"10" not 10

//Cast a variable
//Cast a number - Number(variable)

//Cast as a string by String(variable)

//Calculate the future age

var futureAge = age + Number(yearsMore);
console.log(futureAge);


//Make our results look pretty
console.log("You will be "+futureAge+" in "+yearsMore+" years.");
alert("You will be "+futureAge+" in "+yearsMore+" years.");
