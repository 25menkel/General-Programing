// loop notes

/*
Loops are a great way for us to repeat a set of steps
If you have something you want to do multiple times in a row or
until something happens loops are an ideal solution

there are 2 general flavors of loop in programing
1 while loops:
While (condition){
    code goes here
}

let i = 0;
while (i < 3){
    console.log(i);
    i++;    // sjorthand for i += 1, which is in turn a shorthand for i = i +1
}
 a single time through a loop is called a iteration
 while loops will continue until their condition becomes falsy
 0 is falsy

while (i){
    console.log("banana");
    i--;
}

There is a second flavor of while loop called a do while loop
the difference is that the do while loop will always excute at least once

structure for do while
do {
    code here
} while(condition);
 
let a = 0;
do {
    console.log(a);
    a += 1:
} while (a < -1);

2 for loops
for loops are just fancy while loops, their syntax is more complicated
but they're also more commonly used because you are less likly to make an infinity loop

for loop structure:
for(begin; condition; step) {
    code goes here
}
 example

 for (let j = 0; j < j++) {
    console.log(`j= ${j}`);
 }

 with either form of loop as a general rule your condition is going
 to be based on a number you probley want to use
 <,>,<=,>=
 ==,!= are likly to enable to miss and make an infintate loop

 if you are off by 1 a common solutuion to this is to just change
 between < and <= or > and >=