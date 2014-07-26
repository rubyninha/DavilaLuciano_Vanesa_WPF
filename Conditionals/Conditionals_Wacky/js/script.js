/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Conditionals_Wacky
*/

// Conditionals - Wacky Assignment

//Determine which nail polish color to wear according to destination

//Prompt user for name
var name = prompt("Please, type in your name:");

//Test if the variable is blank

if(name===""){
    //The user left it blank

    //Reprompt the user for name
    name = prompt("Please, type in your name. Do not leave blank.");
}
console.log(name);

//Create an alert that the user will see
alert("Welcome, " +name+"! Let's figure out which color of nail polish you should wear.");

//Create variables for destinations
var destination = "job interview";
var  userDestination = prompt("Tell us whether you're going to a job interview, church, or somewhere else:\n(Please, do not leave blank.)");
var anywhereElse = true;

//
if(userDestination === destination || anywhereElse === false) {
    console.log("Your should definitely wear NUDE!");
    alert("Your should definitely wear NUDE!");
}else if{

}












