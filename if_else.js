// basic if else statement
//----------------------------------------
// var age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }   
//----------------------------------------
// if else if statement
//----------------------------------------
// var score = 85;
// if (score >= 90) {
//     console.log("You got an A.");
// } else if (score >= 80) {
//     console.log("You got a B.");
// } else {
//     console.log("You need to improve.");
// }

//-------------------------------------------
// Nested if statement
//-------------------------------------------
// var num = 10;
// if (num > 0) {
//     console.log("The number is positive.");  
//     if (num % 2 === 0) {
//         console.log("The number is even.");
//     } else { 
//         console.log("The number is odd.");
//     }
// } else if (num < 0) {    
//     console.log("The number is negative.");
// } else {    
//     console.log("The number is zero.");
// }  


//-------------------------------------------
// Ternary operator (conditional operator)
//-------------------------------------------
// var age = 20;
// var isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
// console.log(isAdult);   



//--------------------------------------------
//checking access
//--------------------------------------------
// var username = "admin";
// var password = "password123";

// if (username === "admin" && password === "password123") {
//     console.log("Access granted.");
// } else {
//     console.log("Access denied.");
// }

//---------------------------------------------
// checking number sign
//---------------------------------------------

// var number = -5;

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }


//-----------------------------------------------
// checking even or odd
//-----------------------------------------------
// var num = 7;             
// if (num % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }


//------------------------------------------------
//falsy values in JavaScript
//------------------------------------------------

// var value = 0; // Falsy value
// if (value) {
//     console.log("This will not be printed.");
// } else {
//     console.log("This will be printed because 0 is falsy.");
// }


// var value = ""; // Falsy value
// if (value) {
//     console.log("This will not be printed.");
// } else {
//     console.log("This will be printed because an empty string is falsy.");
// }

// var value = null; // Falsy value
// if (value) {
//     console.log("This will not be printed.");
// } else {
//     console.log("This will be printed because null is falsy.");
// }

// var value = undefined; // Falsy value
// if (value) {
//     console.log("This will not be printed.");
// } else {
//     console.log("This will be printed because undefined is falsy.");
// }

// var value = NaN; // Falsy value
// if (value) {
//     console.log("This will not be printed.");    
// } else {
//     console.log("This will be printed because NaN is falsy.");
// }


//----------------------------------------------------
// truthy values in JavaScript
//----------------------------------------------------  

// var value = 1; // Truthy value
// if (value) {
//     console.log("This will be printed because 1 is truthy.");
// } else {
//     console.log("This will not be printed.");
// }

// var value = "Hello"; // Truthy value
// if (value) {
//     console.log("This will be printed because a non-empty string is truthy.");
// } else {
//     console.log("This will not be printed.");
// }

// var value = []; // Truthy value
// if (value) {
//     console.log("This will be printed because an empty array is truthy.");
// } else {
//     console.log("This will not be printed.");
// }


//--------------------------------------------------------
// logical operators in if statements
//--------------------------------------------------------

//1.

// var age = 25;
// var hasID = true;    
// if (age >= 18 && hasID) {
//     console.log("You are allowed to enter.");
// } else {
//     console.log("You are not allowed to enter.");
// }

//2.

// var age = 16;
// var hasParentalConsent = true;
// if (age >= 18 || hasParentalConsent) {
//     console.log("You are allowed to enter.");
// } else {
//     console.log("You are not allowed to enter.");
// }    


//3.

// var isRaining = true;
// if (isRaining) {
//     console.log("Don't forget to take an umbrella!");
// } else {
//     console.log("Enjoy the sunny weather!");
// }


//4.

// var temperature = 30;
// if (temperature > 30) {
//     console.log("It's a hot day.");  
// } else if (temperature >= 20 && temperature <= 30) {
//     console.log("It's a warm day.");
// } else {
//     console.log("It's a cold day.");
// }

//5.
// var score = 85;
// if (score >= 90) {
//     console.log("You got an A.");
// } else if (score >= 80) {
//     console.log("You got a B.");
// } else if (score >= 70) {
//     console.log("You got a C.");
// } else if (score >= 60) {    
//     console.log("You got a D.");
// } else {
//     console.log("You got an F.");
// }

//---------------------------------------------------------
// switch statement
//---------------------------------------------------------

// var day = "Monday";
// switch (day) {
//     case "Monday":       
//         console.log("Today is Monday.");
//         break;
//     case "Tuesday":  
//         console.log("Today is Tuesday.");    
//         break;
//     case "Wednesday":    
//         console.log("Today is Wednesday.");  
//         break;       
//     case "Thursday":    
//         console.log("Today is Thursday.");   
//         break;
//     case "Friday":
//         console.log("Today is Friday.");
//         break;
//     case "Saturday": 
//         console.log("Today is Saturday.");
//         break;
//     case "Sunday": 
//         console.log("Today is Sunday."); 
//         break;
//     default:
//         console.log("Invalid day.");
// }            

// var color = "red";
// switch (color) {
//     case "red":      
//         console.log("The color is red.");        
//         break;
//     case "blue":     
//         console.log("The color is blue.");       
//         break;   
//     case "green":    
//         console.log("The color is green.");      
//         break;
//     default:
//         console.log("Unknown color.");
// }                    


// var grade = "B";
// switch (grade) {
//     case "A":    
//         console.log("Excellent!");
//         break;
//     case "B":    
//         console.log("Good job!");            
//         break;       
//     case "C":    
//         console.log("You can do better.");
//         break;
//     case "D":    
//         console.log("Needs improvement.");
//         break;
//     case "F":    
//         console.log("Failed.");
//         break;
//     default:
//         console.log("Invalid grade.");
// }    

// let value = 10;
// switch (true) {
//     case value > 0:
//         console.log("The number is positive.");
//         break;
//     case value < 0:
//         console.log("The number is negative.");
//         break;
//     default:
//         console.log("The number is zero.");
// }


// //user input for switch statement
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a day of the week: ", function(day) {

//     switch (day.toLowerCase()) { 
//         case "monday":   
//             console.log("Today is Monday.");
//             break;
//         case "tuesday":      
//             console.log("Today is Tuesday.");
//             break;
//         case "wednesday":    
//             console.log("Today is Wednesday.");      

//             break;
//         case "thursday":     
//             console.log("Today is Thursday.");           
//             break;   
//         case "friday":
//             console.log("Today is Friday.");
//             break;   
//         case "saturday":
//             console.log("Today is Saturday.");
//             break;
//         case "sunday":   
//             console.log("Today is Sunday.");
//             break;
//         default:
//             console.log("Invalid day.");
//     }

//     rl.close(); // close readline
// });
