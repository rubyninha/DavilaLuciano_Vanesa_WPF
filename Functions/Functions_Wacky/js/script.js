/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Functions_Wacky
*/

// Functions - Wacky Assignment


// Create a function that will calculate how many bunnies a female rabbit could have in a lifetime


//Prompt user to give age of their female rabbit

var yourBunny = prompt("Let's calculate how many bunnies your rabbit could have. Enter age of the female rabbit:");

// Validate using while loop
while(isNaN(yourBunny) || yourBunny==="") {
    //Re-prompt the user
    yourBunny = prompt("Please, enter your bunny's age in form of a number.");
}



// Create variable average for a litter in a rabbit's year

var litter = 72;


// Call the function
// Create a variable to "catch" the user input
var totalBunnies = calcBunnies(yourBunny, litter);

console.log("Watch out! You might end up with "+totalBunnies+" when all is said and done.");

// Create a function that will calculate the total balance
// Create parameters for Function
function calcBunnies(b, l) {
    var bunnies = b * l;
    return bunnies;//function spitting the info out
}
console.log(totalBunnies);


// Create alert that user can see
alert("Watch out! You might end up with "+totalBunnies+" bunnies when all is said and done.");

