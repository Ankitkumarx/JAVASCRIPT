
//...................Variable Declaration and Initialization.................

// var a = 10;
// console.log("Value of a: " + a);
// console.log("Type of a: " + typeof a);

//...................declaration vs  definition.................

// var value;
// console.log("Value of value: " + value); // undefined
// console.log("Type of value: " + typeof value); // undefined

// var a = 10;
// console.log("Value of a: " + a); // 10
// console.log("Type of a: " + typeof a); // number

//................... Naming Convention (camelCase) .................

// javaScript variables are typically named using camelCase, which means that the first word is lowercase and each subsequent word starts with an uppercase letter. This convention helps improve readability and makes it easier to understand the purpose of the variable.

//suppose we want to store the name of a person, we can declare a variable like this:

// var personName = "John Doe";
// console.log("Person Name: " + personName);

//.......number variable..............

// var age = 25;
// console.log("Age: " + age);
// console.log("Type of age: " + typeof age);


//.......string variable..............

// var name = "Alice";
// console.log("Name: " + name);
// console.log("Type of name: " + typeof name);

//.......boolean variable..............

// var isStudent = true;
// console.log("Is Student: " + isStudent);
// console.log("Type of isStudent: " + typeof isStudent);

//.......undefined variable..............

// var undefinedVariable;
// console.log("Undefined Variable: " + undefinedVariable);
// console.log("Type of undefinedVariable: " + typeof undefinedVariable);

//.......null variable..............

// var nullVariable = null;
// console.log("Null Variable: " + nullVariable);
// console.log("Type of nullVariable: " + typeof nullVariable); // object (this is a quirk in JavaScript)

//...typeof operator..............

// var num = 42;
// var str = "Hello, World!";
// var bool = true;
// var undef;
// var nul = null;      

// console.log("Type of num: " + typeof num); // number
// console.log("Type of str: " + typeof str); // string
// console.log("Type of bool: " + typeof bool); // boolean
// console.log("Type of undef: " + typeof undef); // undefined
// console.log("Type of nul: " + typeof nul); // object (this is a quirk in JavaScript)

//.......strict mode..............

// Strict mode is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It can be enabled by adding the following line at the beginning of a script or a function:

// "use strict";
// When strict mode is enabled, it changes the behavior of JavaScript in several ways, such as:

// 1. It prevents the use of undeclared variables.
// 2. It throws errors for certain actions that would otherwise be silent failures.
// 3. It disallows duplicate parameter names in functions.

// Example of strict mode:

// "use strict";
// This will throw an error because x is not declared

// x = 10; // ReferenceError: x is not defined
// var x = 10; // Now x is declared and initialized
// console.log("Value of x: " + x);
// console.log("Type of x: " + typeof x);


//..............dynamic typing..............

// JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime. This allows for flexibility in coding but also requires developers to be mindful of the types of values they are working with.


// var dynamicVariable = 42; // Initially a number
// console.log("Value: " + dynamicVariable); // 42
// console.log("Type: " + typeof dynamicVariable); // number


// dynamicVariable = "Now I'm a string!"; // Now it's a string
// console.log("Value: " + dynamicVariable); // Now I'm a string!
// console.log("Type: " + typeof dynamicVariable); // string

//....................const keyword..............

// The const keyword is used to declare variables that are meant to be constant, meaning their value cannot be reassigned after they have been initialized. However, if the variable holds an object or an array, the contents of that object or array can still be modified.

// const PI = 3.14159;
// console.log("Value of PI: " + PI); // 3.14159
// PI = 3.14; // This will throw an error because PI is a constant

// const myArray = [1, 2, 3];
// console.log("Original Array: " + myArray); // Original Array: 1,2,3
// myArray.push(4); // This is allowed, we are modifying the contents of the array, not reassigning the variable
// console.log("Modified Array: " + myArray); // Modified Array: 1,2,3,4

//...................hosisting..............

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// console.log("Value of hoistedVariable: " + hoistedVariable); 
// var hoistedVariable = "I am hoisted!";
// // In the above code, the declaration of hoistedVariable is hoisted to the top, but its initialization is not. Therefore, when we try to log its value before the initialization, it will output undefined instead of throwing an error.       
// console.log("Value of hoistedVariable after initialization: " + hoistedVariable); // I am hoisted!

// However, it's important to note that only the declarations are hoisted, not the initializations. So if you try to access a variable before it has been initialized, you will get undefined.

//.........................user input (node.js).................

// In a Node.js environment, you can use the readline module to get user input from the command line. Here's an example of how to do that:

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// rl.question ("What is your name? ", function(name) {
//     console.log("Hello, " + name + "!");
//     rl.close();
// });


// const readline = require('readline');

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// }); 


// rl.question("What is your age? ", function(age) {
//     console.log("You are " + age + " years old.");
//     rl.close();
// });

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name? ", function(name) {

//     console.log("Hello, " + name + "!");

//     rl.question("What is your age? ", function(age) {

//         console.log("You are " + age + " years old.");

//         rl.close();
//     });
// });



//..................var & let & const.................

// var is function-scoped, while let and const are block-scoped. This means that variables declared with var are accessible throughout the entire function they are declared in, while variables declared with let and const are only accessible within the block (e.g., within a loop or an if statement) they are declared in.

// var x = 10;
// var x = 20; // This is allowed, x is redeclared and reassigned
// console.log("Value of x: " + x); // 10
// console.log("Type of x: " + typeof x); // number


// // Using let
// // The variable y is declared with let, which means it is block-scoped. It can be reassigned a new value, but it cannot be redeclared within the same scope.
// let y = 20;
// let y = 30; // This will throw an error because y is already declared in the same scope
// console.log("Value of y: " + y); // 20
// console.log("Type of y: " + typeof y); // number    


// //using const
// // The variable z is declared with const, which means it is block-scoped and cannot be reassigned a new value. It must be initialized at the time of declaration.
// const z = 30;
// console.log("Value of z: " + z); // 30
// console.log("Type of z: " + typeof z); // number


// scope example with var, let, and const

// if (true) {
//     var a = "I am a var variable";
//     let b = "I am a let variable";  

//     console.log(a); // I am a var variable
//     console.log(b); // I am a let variable

// }

//   console.log(a); // I am a var variable
//   console.log(b); // ReferenceError: b is not defined (because b is block-scoped and not accessible outside the if block)

/* ------------------------comparison of var, let, and const-------------------------

| Feature           | var                     | let                     | const                   |
|-------------------|-------------------------|-------------------------|-------------------------|     
| Scope             | Function-scoped         | Block-scoped            | Block-scoped            |
| Redeclaration     | Allowed                 | Not allowed             | Not allowed             |
| Reassignment      | Allowed                 | Allowed                 | Not allowed             |
| Hoisting          | Yes (declarations only) | Yes (declarations only) | Yes (declarations only) |
| Temporal Dead Zone| No                      | Yes                     | Yes                     |
| Use Case          | Legacy code, function-level scope | Modern code, block-level scope | Constants, values that should not change |


//strict mode deep explanation

// Strict mode is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It can be enabled by adding the following line at the beginning of a script or a function:
