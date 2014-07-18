/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
Assignment: Expressions_Idustry
*/


//Figure the size of a website banner containing three images, based on the sum of the pixels of each image horizontally or vertically

//Prompt user for name

var name = prompt("Please, type in your name.");

console.log(name);

//Create an alert that the user will see
alert("Welcome, " +name+"! We need a few details from you.");


//Prompt user for length in pixels of the images

var imageLength1 = prompt("Enter the length of your first image in pixels.");
console.log(imageLength1);


var imageLength2 = prompt("Great! Now enter the length of your second image in pixels...");
console.log(imageLength2);


var imageLength3 = prompt("and the length of your third image in pixels.");
console.log(imageLength3);


//List sizes with an array of user input

var lengths = [imageLength1, imageLength2, imageLength3];
console.log(lengths);


//Create an alert that the user will see
alert("The lengths of your images are " +lengths+".");


//Figure out total length by adding pixels of each image

var totalLength = Number(imageLength1) + Number(imageLength2) + Number(imageLength3);
console.log(totalLength);

console.log(name+", based on the information you gave us, the total length of your banner will be "+totalLength+" pixels.");

//Create an alert that the user will see

alert(name+", based on the information you gave us, the total length of your banner will be "+totalLength+" pixels if images are placed vertically.");


//Prompt user for width in pixels of the images

var imageWidth1 = prompt("Now, let's figure out how wide your banner would be. Enter the width of your first image in pixels.");
console.log(imageWidth1);


var imageWidth2 = prompt("Great! Now enter the width of your second image in pixels...");
console.log(imageWidth2);


var imageWidth3 = prompt("and the length of your third image in pixels.");
console.log(imageWidth3);


//List sizes with an array of user input

var widths = [imageWidth1, imageWidth2, imageWidth3];
console.log(widths);


//Create an alert that the user will see
alert("The widths of your images are " +widths+".");


//Figure out total width by adding pixels of each image

var totalWidth = Number(imageWidth1) + Number(imageWidth2) + Number(imageWidth3);
console.log(totalWidth);

console.log(name+", based on the information you gave us, the total width of your banner will be "+totalWidth+" pixels.");

//Create an alert that the user will see

alert(name+", based on the information you gave us, the total width of your banner will be "+totalWidth+" pixels if images are placed horizontally.");

