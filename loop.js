//--------------------------------------------------------------
//Introduction to JavaScript Loops
//--------------------------------------------------------------

// Loops are used to execute a block of code repeatedly until a specified condition is met. JavaScript provides several types of loops, including for, while, and do...while loops.

//1. For Loop
// The for loop is used to execute a block of code a specific number of times. It consists of three parts: initialization, condition, and increment/decrement.  
// for (initialization; condition; increment/decrement) {       
//     // Code to be executed
// }    

// 2. While Loop
// The while loop is used to execute a block of code as long as a specified condition is true. It consists of a condition that is evaluated before each iteration.
// while (condition) {       
//     // Code to be executed
// }

// 3. Do...While Loop
// The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, as the condition is evaluated after the code block is executed.
// do {       
//     // Code to be executed
// } while (condition);

// 4. For...In Loop
// The for...in loop is used to iterate over the properties of an object. It allows you to access each property name and its corresponding value.
// for (var key in object) {    
//     if (object.hasOwnProperty(key)) { // Check if the property is a direct property of the object
//         console.log(key + ": " + object[key]); // Access the property value using the key
//     }
// }

// 5. For...Of Loop
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It allows you to access each element directly without needing to use an index.
// for (var element of iterable) {    
//     // Code to be executed
// }


//..............................................
// WHILE LOOP EXAMPLE
//..............................................

// var count = 0;
// while (count < 5) {
//     console.log("Count: " + count);
//     count++;
// }

// let i = 0;
// while (i < 5) {
//     console.log("i: " + i);
//     i++;
// }


//..............................................
// for loop example
//..............................................

// 1. for loop with user input
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", function(num) {

//     for (let i = 0; i < num; i++) {
//         console.log("i: " + i);
//     }

//     rl.close();
// });

// 2.

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // sum = sum + i
// }   
// console.log("Sum of numbers from 1 to 5: " + sum); // 15


//3. Do...While Loop

// let count = 0;
// do {
//     console.log("Count: " + count);
//     count++;
// } while (count < 5);

// let i = 1000;
// do {
//     console.log(" value -- > i: " + i);
//     i++;
// } while (i < 1000);

// 4. For...In Loop

// const person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
// };   
// for (let key in person) {
//     if (person.hasOwnProperty(key)) { // Check if the property is a direct property of the object
//         console.log(key + ": " + person[key]); // Access the property value using the key
//     }
// }


// 5. For...Of Loop

// const numbers = [10, 20, 30, 40, 50];
// for (let num of numbers) {
//     console.log("Number: " + num);
// }



//-----------------------------------------------------------
//continoue and break statements
//-----------------------------------------------------------

//1. Continue Statement
// The continue statement is used to skip the current iteration of a loop and move to the next iteration. It is often used to skip over certain conditions or values in a loop.
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) { // Skip even numbers
//         continue;
//     }
//     console.log("Odd number: " + i);
// }    

//2. Break Statement    
// The break statement is used to exit a loop prematurely when a certain condition is met. It is often used to stop the loop when a specific value is found or when a certain condition is satisfied.       
// for (let i = 0; i < 10; i++) {
//     if (i === 5) { // Exit the loop when i is 5
//         break;
//     }
//     console.log("i: " + i);
// }