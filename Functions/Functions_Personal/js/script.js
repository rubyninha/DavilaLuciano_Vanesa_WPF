/* Vanesa Dávila-LucianoWPF 1407 Section 02Assignment: Functions_Personal*///Create a function that will convert a person's age in years into daysfunction ageInDays(ageInYears){//Input an age in years// ageInDays = ageInYears * 365.242;//Create a variable for ageInDays    var ageInDays = ageInYears * 365;    console.log("You are "+ageInDays+" days old.");}//Call the functionageInDays(7);//Prompt user to input their agevar userInput = prompt("Let's see how old you are in days!\nPlease, type in your age:");//Validate the prompt//Test if it is a numberif(isNaN(userInput)) {    console.log("Inside of Number Test");    //Remind the user to type in their age in numbers    var userInput = prompt("Enter you age as a NUMBER:");}console.log(userInput);//Add the userInput into the functionvar days = ageInDays(userInput);//If the user is younger than 25000 days old, they have "many days of life ahead", otherwise, their"days are numbered"if(days < 25000){    console.log("You still have many days ahead of you!");}else{    console.log("Sorry, friend! Your days are numbered.");}