//------------------------------type coercion in javascript---------------------------
// Type coercion is the automatic or implicit conversion of values from one data type to another in JavaScript. This can happen when you perform operations on values of different types, and JavaScript will try to convert them to a common type to make the operation possible.

// For example, when you use the + operator with a number and a string, JavaScript will convert the number to a string and concatenate them:

// var num = 42;
// var str = "The answer is: ";
// var result = str + num; 
// console.log(result); // "The answer is: 42"

//main areas where coercion occurs in JavaScript:
// 1. String conversion
// 2. Numeric conversion
// 3. Boolean conversion
// 4. equality conversion
// 5. arithmetic conversion

//1. String conversion
// When you use the + operator with a string and another type, JavaScript will convert the other type to a string and concatenate them.

// var num = 42;
// var str = "The answer is: ";
// var result = str + num; 
// console.log(result); // "The answer is: 42"

//this commonly happens in the following cases:
//1. concatination of strings with other types
//2. using the String() function to convert values to strings
//3. mixing strings with other types in template literals


//1. concatination of strings with other types
// var num = 42;
// var str = "The answer is: ";
// var result = str + num; 
// console.log(result); // "The answer is: 42"

// var bool = true;
// var str2 = "The value is: ";
// var result2 = str2 + bool; 
// console.log(result2); // "The value is: true"

// var str1 = "The value is: ";
// var str2 = "Hello";
// var result3 = str1 + str2; 
// console.log(result3); // "The value is: Hello"
// console.log("Type of result3: " + typeof result3); // string

// var num1 = 10;
// var num2 = 20;
// var result4 = num1 + num2; 
// console.log(result4);


//3. mixing strings with other types in template literals

// console.log("value of ('5' + 3): " + ('5' + 3)); // "53"
// console.log("value of ('5' - 3): " + typeof ('5' - 3)); // "number"

// console.log("value of (5 + 3 + 2): " + (5 + 3 + "2")); 
// console.log("value of (5 + 3 + 2): " + typeof(5 + 3 + "2"));

// console.log("('hello' + true) :" + ('hello' + true)); // "hellotrue"
// console.log("('hello' + true) :" + typeof ('hello' + true)); // "string"


// explicit string conversion using String() function
// sometimes you may want to explicitly convert a value to a string using the String() function:

// var value = 42;
// var strValue = String(value); 
// console.log("String value: " + strValue);
// console.log("Type of strValue: " + typeof strValue); // string

// console.log("value: " + value);
// console.log("Type of value: " + typeof value); // number


// 2. Numeric conversion
// When you use arithmetic operators with values of different types, JavaScript will try to convert them to numbers. For example:

// console.log("value of ('5' - 3): " + ('5' - 3)); // 2
// console.log("value of ('5' - 3): " + typeof ('5' - 3)); // "number"  
// console.log("value of ('5' * 3): " + ('5' * 3)); // 15
// console.log("value of ('5' * 3): " + typeof ('5' * 3)); // "number"      
// console.log("value of ('5' / 3): " + ('5' / 3)); // 1.6666666666666667
// console.log("value of ('5' / 3): " + typeof ('5' / 3)); // "number"
// console.log("value of ('5' % 3): " + ("5" % 3)); 

// 3. Boolean conversion
// When you use values in a boolean context, such as in an if statement or with logical operators, JavaScript will convert them to booleans. The following values are considered falsy and will be converted to false:

//boolen conversion happens in the following cases:
//1. if satatements and loops
//2. logical operators
//3. while loops
//4. ternary operators



//console.log("Boolean value of 0: " + Boolean(0)); // false
//console.log("Boolean value of 0: " + typeof Boolean(0)); // false
//console.log("Boolean value of '': " + Boolean('')); // false
//console.log("Boolean value of '': " + typeof Boolean('')); // false
//console.log("Boolean value of null: " + Boolean(null)); // false
//console.log("boolean value of null: " + typeof Boolean(null)); // false
//console.log("Boolean value of undefined: " + Boolean(undefined)); // false
//console.log("Boolean value of undefined: " + typeof Boolean(undefined)); // false
//console.log("Boolean value of NaN: " + Boolean(NaN)); // false
//console.log("Boolean value of NaN: " + typeof Boolean(NaN)); // false

// All other values are considered truthy and will be converted to true:
//console.log("Boolean value of 1: " + Boolean(1)); // true
//console.log("Boolean value of 'hello': " + Boolean('hello')); // true
//console.log("Boolean value of []: " + Boolean([])); // true
//console.log("Boolean value of {}: " + Boolean({})); // true
//console.log("Boolean value of function(){}: " + Boolean(function(){})); // true

//falsy values in javascript
//falsy values in JavaScript are values that are considered false when evaluated in a boolean context. There are only six falsy values in JavaScript:

//1. false
//2. 0 (zero)
//3. '' (empty string)
//4. null
//5. undefined
//6. NaN (Not a Number)

//everything else is considered truthy, which means it will be evaluated as true in a boolean context. This includes non-empty strings, non-zero numbers, objects, arrays, and functions.

// false
// 0
// ''
// null
// undefined
// NaN

// var x = 5 + "2" + 3;
// console.log("Value of x: " + x); // "523"
// console.log("Type of x: " + typeof x); // "string"

// var y = 5 + 3 + "2";
// console.log("Value of y: " + y); // "82"
// console.log("Type of y: " + typeof y); // "string"

// var z = "5" + 3 + 2;
// console.log("Value of z: " + z); // "532"
// console.log("Type of z: " + typeof z); // "string"


// euality (==) vs strict equality (===)
// In JavaScript, the equality operator (==) performs type coercion when comparing values, while the strict equality operator (===) does not. This means that when you use ==, JavaScript will try to convert the values to a common type before comparing them, which can lead to unexpected results. On the other hand, === compares both the value and the type without performing any conversion.

// console.log("5" == 5); // true (type coercion happens)
// console.log("5" === 5); // false (no type coercion, different types)
// console.log(0 == false); // true (type coercion happens)

// var a = 10;
// var b = "10";

// console.log("a == b: " + (a == b)); // true (type coercion happens)
// console.log("a === b: " + (a === b)); // false (no type coercion, different types) 
// console.log("value of a: " + a); // 10
// console.log("Type of a: " + typeof a); // number
// console.log("value of b: " + b); // "10"        
// console.log("Type of b: " + typeof b); // string

//conversion of values to numbers using the Number() function
// var strNum = "42";
// var num = Number(strNum); 
// console.log("Numeric value: " + num);
// console.log("Type of num: " + typeof num); // number


// conversion of values to booleans using the Boolean() function
// var str = "hello";
// var boolValue = Boolean(str); 
// console.log("Boolean value: " + boolValue);
// console.log("Type of boolValue: " + typeof boolValue); // boolean

// var emptyStr = "";
// var boolValue2 = Boolean(emptyStr); 
// console.log("Boolean value of empty string: " + boolValue2); // false
// console.log("Type of boolValue2: " + typeof boolValue2); // boolean

// var num = 0;
// var boolValue3 = Boolean(num); 
// console.log("Boolean value of 0: " + boolValue3); // false
// console.log("Type of boolValue3: " + typeof boolValue3); // boolean


//SPECIAL CASES OF TYPE COERCION

//1. null and undefined
// When you compare null and undefined using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types.        
// console.log("null == undefined: " + (null == undefined)); // true (type coercion happens)
// console.log("null === undefined: " + (null === undefined)); // false (no type coercion, different types) 

//2. NaN (Not a Number)
// NaN is a special value in JavaScript that represents an invalid number. It is the result of certain operations that cannot produce a valid number, such as dividing zero by zero or trying to convert a non-numeric string to a number. NaN is unique in that it is not equal to itself, which can lead to some interesting behavior when comparing values.

// console.log("NaN == NaN: " + (NaN == NaN)); // false
// console.log("NaN === NaN: " + (NaN === NaN)); // false   

// To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method:
// console.log("isNaN(NaN): " + isNaN(NaN)); // true
// console.log("Number.isNaN(NaN): " + Number.isNaN(NaN)); // true

//3. empty string and zero
// When you compare an empty string ('') and zero (0) using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types. 
// console.log("'' == 0: " + ('' == 0)); // true (type coercion happens)
// console.log("'' === 0: " + ('' === 0)); // false (no type coercion, different types) 

//4. false and 0
// When you compare false and 0 using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types. 
// console.log("false == 0: " + (false == 0)); // true (type coercion happens)
// console.log("false === 0: " + (false === 0)); // false (no type coercion, different types)

//5. true and 1
// When you compare true and 1 using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types. 
// console.log("true == 1: " + (true == 1)); // true (type coercion happens)
// console.log("true === 1: " + (true === 1)); // false (no type coercion, different types)

//6. empty array and false
// When you compare an empty array ([]) and false using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types. 
// console.log("[] == false: " + ([] == false)); // true (type coercion happens)
// console.log("[] === false: " + ([] === false)); // false (no type coercion, different types)

//7. empty object and false
// When you compare an empty object ({}) and false using the equality operator (==), they are considered equal because JavaScript performs type coercion and treats them as the same value. However, when you use the strict equality operator (===), they are not considered equal because they are of different types. 
// console.log("{} == false: " + ({} == false)); // true (type coercion happens)
// console.log("{} === false: " + ({} === false)); // false (no type coercion, different types)


