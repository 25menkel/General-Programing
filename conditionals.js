// notes about conditionals in programming

/* 
At the most basic level a conditional statment is just if -> Then 
have to check if a condition is true and then doing something
based on the true/false nature of that condition
*/

// conditional statements rely on some form of comparison

/*
comparisions in javaScript if most or all programming langues look 
like math equations to some extent
a < b is a less than b
a > b is a greator than b
a == b is a equal to b
a <= b is a less than or equal to b
a >= b is a greator than or equal to b
*/

// examples
let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log(a == 5);
console.log(a == "5");

// javaScript also has a === for strickt equality
// this will ask is a equal to b and dose a and b have the same data type
// ! means not
console.log(a !=3);
console.log('Badin' > 'Ross')
/* rules for string comparision
1 compare the first charchaters of each string
if the first charchters of each string
first letter greater thann second then True
If the first is less than then it will be false
2 compare the second charchters of each string
3 continue till string ends
4 if both strings are equal and have the same lenth = false
5 If one string is longer than it is greator
*/

// an if statment allows you to gate code behind a condition being true
if (3 < 5){
    console.log("3 is less than 5");
}
// options to make a choice between options, you have other strucktures
if (7 < 5){
    console.log('7 is less than 5');
} else {
    console.log('7 is Not less than 5');
}

let testNumber = 6;
if(testNumber)

// the ternary Operator allows you to write simple and concise if/else statments
// the syntax for this is:
// condition ? do this : else do this instead

