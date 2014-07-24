/* 
Vanesa Dávila-Luciano
WPF 1407 Section 02
GoTo Training Example Week #3
*/

//alert("Testing 1,2,3");

//Code that is going to check how many pears are in a fruit bowl

//Create our "fruit bowl""
//Array - hold multiple variables

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "apple", "pear", "tomato", "banana"];
console.log(bowlOfFruit);

//How can I get one fruit in the bowl?
console.log(bowlOfFruit[1]);

//Array length
//Dot Syntax - "use a period""
//Tell us how many items are in the array
console.log(bowlOfFruit.length);

//Counting how many pears are in the bowl

//Create a variable that will track how many pears we have in total
var totalNumPears = 0;

//Test each fruit and see if its a pear

//If(conditional to test){ code that will run if condition is true }

//"7" the same as 7

if(bowlOfFruit[0]==="pear"){ 

    //Count that fruit as a pear
    //add one to the variable totalNumPears
    console.log("This fruit is a pear!");
    totalNumPears++; //++ is the same is as writing totalNumPears = totalNumPears+1
}else{
    //This code will run if the condition is FALSE!
    console.log("Fruit is not a pear.");

}



if(bowlOfFruit[1]==="pear"){ 

    //Count that fruit as a pear
    //add one to the variable totalNumPears
    console.log("This fruit is a pear!");
    totalNumPears++; //++ is the same is as writing totalNumPears = totalNumPears+1
}else{
    //This code will run if the condition is FALSE!
    console.log("Fruit is not a pear.");

}




if(bowlOfFruit[2]==="pear"){ 

    //Count that fruit as a pear
    //add one to the variable totalNumPears
    console.log("This fruit is a pear!");
    totalNumPears++; //++ is the same is as writing totalNumPears = totalNumPears+1
}else{
    //This code will run if the condition is FALSE!
    console.log("Fruit is not a pear.");

}



if(bowlOfFruit[3]==="pear"){ 

    //Count that fruit as a pear
    //add one to the variable totalNumPears
    console.log("This fruit is a pear!");
    totalNumPears++; //++ is the same is as writing totalNumPears = totalNumPears+1
}else{
    //This code will run if the condition is FALSE!
    console.log("Fruit is not a pear.");

}

if(bowlOfFruit[4]==="pear"){ 

    //Count that fruit as a pear
    //add one to the variable totalNumPears
    console.log("This fruit is a pear!");
    totalNumPears++; //++ is the same is as writing totalNumPears = totalNumPears+1
}else{
    //This code will run if the condition is FALSE!
    console.log("Fruit is not a pear.");

}


//Console.log the totalNumPears variable
console.log(totalNumPears + " pears in the bowl.");

//Create a loop for repetetive code

//Create variable to hold pears "2nd" time through
var pearNumber = 0;

//For loop

//for(initializing a counting variable; condition to test; incremental change){code to do for each loop around}

for(var i =0; i<bowlOfFruit.length; i++){
    //This code will run when the condition is true.
    console.log("Inside of Loop");
    console.log(i);
    console.log(bowlOfFruit[i]);
    
    //Test each fruit if it is a pear
    
    if(bowlOfFruit[i]==="pear"){
                   
                   //add 1 to our pear total
                   pearNumber++;
                   console.log("This fruit is a pear.");
    
    }

}


console.log(pearNumber + " pears in your bowl.");









