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

