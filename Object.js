//introduction to objects

// javascript objects are collections of key-value pairs. They can contain properties and methods. Objects are used to store and organize data in a structured way.

// creating an object using object literal syntax

// var person = {
//     name: "John Doe",
//     age: 30, 
//     city: "New York",
//     greet: function() {
//         console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old and I live in " + this.city + ".");
//     }
// };

//  person.greet();

 // why use objects in JavaScript?
 // 1. Data Organization: Objects allow you to group related data together in a structured way. This makes it easier to manage and access the data.
 // 2. Reusability: Objects can be reused across different parts of your code. You can create multiple instances of an object with different properties and methods.
 // 3. Encapsulation: Objects can encapsulate data and behavior, allowing you to hide implementation details and expose only what is necessary.
 // 4. Modularity: Objects can help you break down your code into smaller, more manageable pieces. This promotes modular programming and makes it easier to maintain and debug your code.


 // object creation methods

 // Incline object creation
 // An inline object is created using curly braces '{}' and is assigned to a variable. This is the most common way to create objects in JavaScript.

// var myObject = {}; // empty object created using inline syntax
// console.log(myObject); // Output: {}

// myObject.name = "Alice"; // Adding a property to the object
// myObject.age = 30; // Adding another property to the object

// console.log(myObject); // Output: { name: 'Alice', age: 30 }

// myObject.prop2 = "Hello"; // Adding another property to the object
// console.log(myObject); // Output: { name: 'Alice', age: 30, prop2: 'Hello' }

// array = [1, 2, 3];
// console.log(array); 
// console.log(typeof array); 
// console.log(array[1]);    
// console.log(array.length); 



// object literal notation
// Object literal notation is a way to create objects using a concise syntax. It allows you to define properties and methods directly within the object declaration.

// var person = {
//     name: "John Doe",
//     age: 30, 
//     city: "New York",
//     greet: function() {
//         console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old and I live in " + this.city + ".");
//     }
// };

// person.greet(); // Output: Hello, my name is John Doe. I am 30 years old and I live in New York.
// console.log("Name: " + person.name); // Output: Name: John Doe
// console.log("Age: " + person.age); // Output: Age: 30
// console.log("City: " + person.city); // Output: City: New York  

// console.log("Type of person: " + typeof person); // Output: Type of person: object


//modifying and adding 
// javascript objects are mutable, which means you can modify their properties and add new properties after the object has been created.

// var person = {
//     name: "John Doe",
//     age: 30, 
//     city: "New York"
// };

// console.log(person); // Output: { name: 'John Doe', age: 30, city: 'New York' }
// person.name = "Alice"; // Modifying an existing property
// person.age = 25; // Modifying another existing property
// person.job = "Engineer"; // Adding a new property

// console.log(person); // Output: { name: 'Alice', age: 25, city: 'New York', job: 'Engineer' }


// when to use dot notation(.) vs bracket notation[]
//........................................................

//1. Dot notation is used when you know the name of the property you want to access or modify. It is more concise and easier to read.

// var person = {
//     name: "John Doe",
//     age: 30, 
//     city: "New York"
// };

// console.log(person.name); // Output: John Doe
// person.age = 25; // Modifying the age property using dot notation
// console.log(person.age); // Output: 25

//2. Bracket notation is used when the property name is dynamic (stored in a variable) or when the property name contains special characters or spaces.

// var person = {
//     name: "John Doe",
//     age: 30, 
//     city: "New York"
// };   

// var propertyName = "name"; // Dynamic property name stored in a variable
// console.log(person[propertyName]); // Output: John Doe


// var propertyName = "age"; // Dynamic property name stored in a variable


// Dynamic property access

// let key = "age";
// let person = { name : "Johan" , age: 30 };
// console.log(person[key]);


// let obj = {
//        1: "one",
//        2: "two"
// };
// console.log(obj[1]);
// console.log(obj["2"]);

// let obj = {
//     "last-name" : "Does",
//     "@score" : 100
// };

// console.log(obj["last-name - name"]);
// console.log(obj["@score"]);

//3.property name starting with a number 

// var data = {
//     1value: "hello"
// };

// console.log(data.1value);


// let obj = {1 : "one" , 2: "two"};

// // console.log(obj.1);   
// console.log(obj[1]);   // "one"
// console.log(obj["2"]);

//Nested Objects
// Object can contain other objects as properties, creating a structure of nested objects

// var nestedobj = {
//     prop: "hello",
//     objprop: {
//         innerprop: "inner property",
//         newinner: "new inner property",
//     },
// };

// console.log(nestedobj.objprop.innerprop);


// var personwithage = {
//     name: "ashok",
//     surname: "sharma",
//     age: 25,
// };

// delete personwithage.age;
// console.log(personwithage.age);

//================================================================
// wrapper object 
// javascript has wrapper object for its primitive type (e.g, number, string, boolean) that provide additional methods.
// ================================================================

// var str = "hello world";
// console.log(typeof str);
// console.log(str.length);

