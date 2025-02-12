// /*
// A function is a set of instructions that are all packed together.
// This is particulary usefull if you need to reuse those instructions,
// especially if you need to reusing them in multiple place, or with
// various starting conditions

// function name, parameters, arguments

// function fuctionName(parmater1, parameter2 etc){
//     code
// }
//     function Name(agument1, argument2, etc);
// */

// // function that returns a fav animanl

// function favoriteAnimal(animal){
//     return animal +"is my favorite animal"
// }
// console.log(favoriteAnimal("Cat"));

// // what happens inside a function is frequently invisable to the outside 
// // world this is called scope
// // local scope is within a function
// // global score the main program

// // exple to demostrate scope
// /*
// let test1 =1
// let test2 =5

// function add1(num) {
//     test2 = test2 + 1
//     return num + 1;
// }

// console.log(add1(test1));
// console.log(test1);
// console.log(test2);
// */
// // a function can change the value of a globale variable, but only
// // if that varable is used by name within the function
// // varables that are passed as arguments to the function will remain unchanged

// // we can make optional paramaters
// /*
// function greetings(name = "Gen R Lee"){
//     console.log(`Hello, ${name}`
// }

// greetings("Gen R Lee");
// greetings("mr. Ross");
// greetings();
// */
// // Anonymos function : freqently used if a function expects to take another function as a parameter
// // function doesn't have a function name
// (function (){
//     alert("this is an anonymous function");
// });

// // amother exple of annonyomous function
// function logKey(event) {
//     console.log(`You pressed the "${event.key}"`)
// }

// this.addEventListener("keydown", logKey);

// //that is normal now this is annoymous

// this.addEventListener("keydown", function (event) {
//     console.log(`You pressed ${event.key}`);
// });

// // can also use the arrow function syntax to create a annonyomus funtion
// this.addEventListener("keydown", (event) => {
//     console.log(`You pressed ${event.key}`);
// })



// let x = 1;

// function a() {
//     let y = 2;
//     output(x);
//     output(z);
// }
// function b() {
//     let z = 3;
//     output(x);
//     output(y);
// }
// function output(value) {
//     console.log(`Value = ${value}`);
// }

// output(x);
// a();
// b();

// functions can have return values which is somethign the function
// sneds back to the global scope. some function dont have a return value

function randomLessThan(num) {
    let x = Math.floor(Math.random() *num);
    return x;
}
console.log(randomLessThan(4));

randomLessThan(4)

// produce a number between 1 and 4
console.log(randomLessThan(4) + 1)

// if you want a function to interact with something elese you ussally need a return value

