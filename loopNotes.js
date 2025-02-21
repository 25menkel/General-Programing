// // loop notes


// Loops are a great way for us to repeat a set of steps
// If you have something you want to do multiple times in a row or
// until something happens loops are an ideal solution

// there are 2 general flavors of loop in programing
// 1 while loops:
// While (condition){
//     code goes here
// }

// let i = 0;
// while (i < 3){
//     console.log(i);
//     i++;    // sjorthand for i += 1, which is in turn a shorthand for i = i +1
// }
//  a single time through a loop is called a iteration
//  while loops will continue until their condition becomes falsy
//  0 is falsy

// while (i){
//     console.log("banana");
//     i--;
// }

// There is a second flavor of while loop called a do while loop
// the difference is that the do while loop will always excute at least once

// structure for do while
// do {
//     code here
// } while(condition);
 
// let a = 0;
// do {
//     console.log(a);
//     a += 1:
// } while (a < -1);

// 2 for loops
// for loops are just fancy while loops, their syntax is more complicated
// but they're also more commonly used because you are less likly to make an infinity loop

// for loop structure:
// for(begin; condition; step) {
//     code goes here
// }
//  example

//  for (let j = 0; j < j++) {
//     console.log(`j= ${j}`);
//  }

//  with either form of loop as a general rule your condition is going
//  to be based on a number you probley want to use
//  <,>,<=,>=
//  ==,!= are likly to enable to miss and make an infintate loop

//  if you are off by 1 a common solutuion to this is to just change
//  between < and <= or > and >=

/*
you can skip elements of the for loop declaration

let i = 0;
for(' i < 3; i++) {
    console.log(i);
}

for(let i = 0; i < 3;){
    console.log(i++);
}

let i = 0

for(; i < 3;){
    console.log(i);
    i++;
}

for(;;){
    infinite loop
}


Break as a command
it will immediately exit you from a loop and advance you 
to the next part of your code. You can put these in as
failsafes if you think you might create an infinate loop

example 1 get a number from the user 

// let sum = 0;
// while (true){
//     let value = +prompt("Enter a number", ``);

//     if(!value){
//         break
// }
//     sum+= value;
// }
// console.log(`sum =` + sum);

// example 2 add nmbers from 1 to a given vaule with a timeout function
// let sum = 0;
// let max = +prompt("add the numbers from 1 to what?");
// let now = Date.now();
// console.log(now);

// for (let i = 1; i <= max; i++){
//     sum += i;

//     if (Date.now() > now +1000){
//         console.log("this took too long");
//         break;
//     }
// }
// console.log(sum);

continue as a command
it is like a lighter verson of break instud of ejecting you
out of a loop it just skips to the end of the current iteration */

// for (let i =0; i < 21; i++) {
//     if (i % 2 == 0){
//        continue;
//     }
//     console.log(i);
// }

// summary of loop: For, While, Do..While
// A Do..While is the only one that will execute at least once
// break - will eject from the loop altogether
// contunue - skip the rest of the current iteration


/*
Arrays
they are a collection of values, specificly an ordered collection 
of values

let arrayName = [item1,item2, item3, item4];

how to make empty array

let fakearray1 = new Array();

let fakeArray2 = [];
*/

// let fruits = ["Apples", "Bananas", "Canteloupes", "Durians", "Lychees"];
// console.log(fruits);

// console.log(fruits[3])   //Durians b/c it starts indexing from 0

// fruits[3] = "Watermelon"
// console.log(fruits);

// fruits[5] = "Strawberrys"
// console.log(fruits);

// // find out how long an array is (how many elements are in it)
// console.log(fruits.length);

// fruits[fruits.length] = "Dragon fruit"
// console.log(fruits);

// fruits[fruits.length] = "blueberry"
// console.log(fruits);

// /*
// array can store elements of any tyoe. including mixing types
// in the same array
// */

// let exampleArray2 = ["Apple", 35, true, function () {console.log(`hello`);}, "array"];

// console.log(exampleArray2[0]);
// console.log(exampleArray2[1]);
// console.log(exampleArray2[3]);

// // can also do math or other operations in an array
// // function to calculate the distance between 2 points on the x-y plane.

// let obj1 = [3,5];
// let obj2 = [7, 11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 +(obj2[1] - obj1[1])**2);
// console.log(dist);

// let primes = [2, 3, 5, 7, 11, 13, 17, 19];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// }

// console.log(primes.at(-1));

// Array methods
// .pop() - it finds the last element of the array returns it and deletes it from the array

// console.log(primes);
// console.log(primes.pop());
// console.log(primes);

// code to find the sum of all preimes less than 20

// let sum = 0;
// while (primes.length > 0) {
//     sum += primes.pop();
//     console.log(primes, sum);
// }

// console.log(sum);

// the inverse of .pop() is .push()
// it adds a element to the end of the array

// let fruits = ["Apple", "Banana", "Canteloupe"];

// console.log(fruits);

// fruits.push("watermelon");

// console.log(fruits);

// the problem with both of these is that you can only modify the end of an array
// you have to use diffrent methd to moddify the middle

// shift()- shift is pop, but at the beginning
// console.log(fruits.shift());
// console.log(fruits);

// unshift is push but at the beginning

// fruits.unshift("Aproicot");
// console.log(fruits);

// push and unshift can add multiple elements at once
// fruits.push("Orange", "Peach");
// fruits.unshift("Lemon", "pineapple");

// console.log(fruits);

// using loops with arrays
// old style of printing all of the array values

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// there is a loop for this called for...of loop

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// array.length is returning the value of the last index + 1 
// it is not actualy couning the numbers in the array

let grades = ["A", "A", "B",  , "B", "A"];
console.log(grades);
console.log(grades.length);

let badArray = [];
badArray[314] = "pie";
console.log(badArray.length);
console.log(badArray);


// A multidimesional array is an array that is in turn made up of more arrays

// exple of array holding xy cord of 5 points
// 3,4 and 1,2 and 9,15 and 37,11 and 215,1
let coordinates = [
    [3,4], 
    [1,2],
    [9,15],
    [37,11],
    [215,1]
]

console.log(coordinates[4][0]);

coordinates[4][0]