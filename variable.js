
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

"use strict";
// This will throw an error because x is not declared

x = 10; // ReferenceError: x is not defined
console.log("Value of x: " + x);
console.log("Type of x: " + typeof x);
