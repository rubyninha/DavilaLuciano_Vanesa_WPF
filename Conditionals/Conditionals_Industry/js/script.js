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