//operators in javascript
//operators are used to perform operations on variables and values.

//types of operators in javascript
//1.Arithmetic operators    
//2.Assignment operators
//3.Comparison operators
//4.Logical operators
//5.Bitwise operators
//6.conditional (ternary) operators

//1.Arithmetic operators
//used to perform arithmetic operations on numbers.

// var x = 10;
// console.log("x + 5: " + (x + 5)); // 15
// console.log("x - 5: " + (x - 5)); // 5
// console.log("x * 5: " + (x * 5)); // 50
// console.log("x / 5: " + (x / 5)); // 2
// console.log("x % 3: " + (x % 3)); // 1

//2.Assignment operators
//used to assign values to variables.

// var y = 20;
// y += 5; // y = y + 5
// console.log("y after += 5: " + y); // 25
// y -= 5; // y = y - 5
// console.log("y after -= 5: " + y); // 20
// y *= 2; // y = y * 2
// console.log("y after *= 2: " + y); // 40
// y /= 4; // y = y / 4
// console.log("y after /= 4: " + y); // 10
// y %= 3; // y = y % 3
// console.log("y after %= 3: " + y); // 1


//3.Comparison operators
// used to compare values and return a boolean result.

// var a = 5;
// var b = 10;
// console.log("a == b: " + (a == b)); // false 
// console.log("a != b: " + (a != b)); // true
// console.log("a > b: " + (a > b)); // false
// console.log("a < b: " + (a < b)); // true
// console.log("a >= b: " + (a >= b)); // false
// console.log("a <= b: " + (a <= b)); // true


//4.Logical operators
//  used to combine multiple boolean expressions and return a boolean result.

// var p = true;
// var q = false;
// console.log("p && q: " + (p && q)); // false
// console.log("p || q: " + (p || q)); // true
// console.log("!p: " + (!p)); // false


//5.Bitwise operators
// used to perform bitwise operations on binary numbers.

// var m = 5; // 0101 in binary
// var n = 3; // 0011 in binary
// console.log("m & n: " + (m & n)); // 1
// console.log("m | n: " + (m | n)); // 7
// console.log("m ^ n: " + (m ^ n)); // 6
// console.log("~m: " + (~m)); // -6
// console.log("m << 1: " + (m << 1)); // 10
// console.log("m >> 1: " + (m >> 1)); // 2


//6.conditional (ternary) operators
//  used to evaluate a condition and return one of two values based on the result.

// var age = 2;
// var isAdult = age >= 18 ? true : false;
// console.log("Is Adult: " + isAdult); 

//SPECIAL OPERATORS

//1. typeof operator
//  used to determine the type of a variable.

//  var num = 42;
//  var str = "Hello, World!";
//  var bool = true;
//  console.log("Type of num: " + typeof num); // number
//  console.log("Type of str: " + typeof str); // string
//  console.log("Type of bool: " + typeof bool); // boolean     


//2. instanceof operator
// used to check if an object is an instance of a specific class or constructor function.

// function Person(name) {
//     this.name = name;
// }        

// var person1 = new Person("Alice");
// console.log("person1 instanceof Person: " + (person1 instanceof Person)); // true
// console.log("person1 instanceof Object: " + (person1 instanceof Object)); // true

//3. in operator
// used to check if a property exists in an object.     
// var obj = { name: "Alice", age: 25 };
// console.log("name in obj: " + ("name" in obj)); // true
// console.log("age in obj: " + ("age" in obj)); // true
// console.log("gender in obj: " + ("gender" in obj)); // false

//4. delete operator
// used to delete a property from an object.
// var obj = { name: "Alice", age: 25 };
// console.log("Before delete: " + JSON.stringify(obj)); // {"name":"Alice","age":25}
// delete obj.age;
// console.log("After delete: " + JSON.stringify(obj)); // {"name":"Alice"}

//5. void operator
// used to evaluate an expression and return undefined.
// function myFunction() {  
//     console.log("This is my function.");
// }        

// console.log("Result of void myFunction(): " + void myFunction()); // This is my function. Result of void myFunction(): undefined


//...............................INCREMENT AND DECREMENT OPERATORS...............................

//1. Increment operator (++)
//  used to increase the value of a variable by 1.

// var count = 5;
// console.log("Count: " + count); // 5
// count++;
// console.log("Count after increment: " + count); // 6

//2. Decrement operator (--)
//  used to decrease the value of a variable by 1.
// var count2 = 10;
// console.log("Count2: " + count2); // 10
// count2--;
// console.log("Count2 after decrement: " + count2); // 9


//3. Prefix and Postfix forms of increment and decrement operators
// var num = 5;
// console.log("num: " + num); // 5
// console.log("num++: " + num++); // 5 (postfix, returns the original value before incrementing)
// console.log("num after num++: " + num);


//4. Prefix form of increment operator
// var num2 = 5;
// console.log("num2: " + num2); // 5
// console.log("++num2: " + ++num2); // 6 (prefix, increments the value first and then returns it)
// console.log("num2 after ++num2: " + num2); // 6 

//5. Prefix form of decrement operator
// var num3 = 5;
// console.log("num3: " + num3); // 5
// console.log("--num3: " + --num3); // 4 (prefix, decrements the value first and then returns it)
// console.log("num3 after --num3: " + num3); // 4

//6. Postfix form of decrement operator
// var num4 = 5;
// console.log("num4: " + num4); // 5
// console.log("num4--: " + num4--); // 5 (postfix, returns the original value before decrementing)
// console.log("num4 after num4--: " + num4); // 4     

//Assignmet for practice

//assignmet 1 for practice
//loose typeing in javascript
//declare a variable and assign a number to it, then reassign a string to the same variable "info".
//assign no -> string -> boolean -> number -> string

// var info = 42; // number
// console.log("Info: " + info);   
// info = "Hello, World!"; // string
// console.log("Info after reassignment: " + info);
// info = true; // boolean
// console.log("Info after reassignment: " + info);
// info = 3.14; // number
// console.log("Info after reassignment: " + info);
// info = "JavaScript is fun!"; // string
// console.log("Info after reassignment: " + info);    

