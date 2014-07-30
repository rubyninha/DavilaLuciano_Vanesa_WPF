/* 
 Vanesa Dávila-Luciano
 WPF 1407 Section 02
 GoTo Training Example Week #4
 */

//alert("Testing 1,2,3");

//Create a file that will give us a random number

//Ask the user for a min number

var min = prompt("Please type in a minimum number:");

//Validate that prompt

//before use a conditional - OLD WAY

/*if(min ===""){
    //Re-prompt the user for a number
    min = prompt("Please type in a minimum number. Please don't leave blank:");
}


// Validate using a while loop
// Test for an empty string, a.k.a. user didn't type anything in
while(min===""){
    //Re-prompt the user
    min = prompt("Please type in a minimum number:");

}

// Validate that it is a number
while(isNaN(min)){
    //Re-prompt the user
    min = prompt("Please type in a minimum number:");

}
 // Validating words
 // Ask user yes or no
 //"yes" is not the same as "Yes" or "YES"
 var yesOrNo = prompt("Please, type in yes or no ONLY!");

 while(yesOrNo!="yes" && yesOrNo!="no" && yesOrNo!="Yes"){
 yesOrNo = prompt("Please, type in yes or no ONLY!");

 }
 */

// Combine validation into one while loop
while(isNaN(min) || min===""){
    //Re-prompt the user
    min = prompt("Please type in a minimum number. Inside of while");

}

// Prompt the user for a max number
var max = prompt("Please, type in a max number:");

// Validate using while loop
while(isNaN(max) || max===""){
    //Re-prompt the user
    max = prompt("Please, type in a max number:");

}


// Call our function
// Arguments go inside of the function call
//randomizer(20, 50);
//randomizer(0, 5);

// Create a variable to "catch" the returned value
var results = randomizer(min, max);
console.log("The returned vale is "+results);

// Create a function that will give us a random number
// Create parameters for our Function
function randomizer(minNum, maxNum){

    // Generate a random number in between 2 numbers
    var randomNumber=Math.round(Math.random()*(maxNum-minNum)+Number(minNum));
    //console.log(randomNumber); - Not a good way of doing it.
    // Returning the value!
    return randomNumber;

}





