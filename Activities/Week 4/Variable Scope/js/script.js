/*
 Vanesa Dávila-Luciano
 WPF 1407 Section 02
 Screencast: Variable Scope
 */

// Functions: Variable Scope

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area =  width * height;
    //console.log(area);
}

console.log(width);
calcArea();
