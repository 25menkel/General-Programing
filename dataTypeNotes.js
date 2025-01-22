// Notes on data types.

// there are 8 data types in javaScript
/* 
1. number both integers and floating point
    includes infinity and NaN (not a number) 
2. BigInt for very large numbers the value gets appromixted 
    override this by adding a loercase "n" to end of number
3. String this is words, charachter or symbols treated like text
    addition with strings just puts the two numbers or symbols together
    generally formed y encapsulating symbols in quotationmarks

There are 3 diffrent types of quotation marks in Javascrip
"hello" double quotes
'hello' single quotes
`hello` backticks
*/

console.log("hello,world!");
console.log('hello, world!');
// if your string contains an apostrophe use double notes
// if you string contains a quotation use single quotes
// backticks allowe you to enbed varaibles into a string
let myName = 'steve';
console.log(`hello, ${myName}`);
// you can also use math or other operations inside of the curly braces
// many programing langugues have a char data type representing
// a single charachter. Javascript dose not

/* Boolean
it can only hold 2 values being True or False

Null
special datatype and contains only 1 value being null.
"null" in javaScript means nothing, empty, or value unknown

Undefined
special datatype contains only 1 value being undefined
in javaScript means that the value has not been assigned

Objects and Symbols ae last 2 datatypes
you can use the typeof() to know the type of variables
*/