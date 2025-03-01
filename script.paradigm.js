//  Imperative programming paradigm
//  one of the oldest and most fundamental approaches to programming. It focuses on how a task should be performed by specifying a sequence of instructions that change the program's state step by step.

// Array to store marks
// let marks = [12, 32, 45, 13, 19];

// Variable to store the sum of marks
// let sum = 0;

// Calculate the sum of marks
// for (let i = 0; i < marks.length ; i++) {
// sum = sum + marks[i];
// }

// Variable to store the average
// let average = 0.0;
// Calculate the average
// average = sum / marks.length;

// Output the average
// console.log("Average of five numbers: " + average);

// Procedural programming paradigm
// is a subset of imperative programming that structures code into procedures (also called functions or subroutines). It emphasizes breaking a program into reusable blocks of code to improve organization and reusability.

// Prompt the user for input
// let num = prompt("Enter any Number: ");

// Initialize the factorial value to 1
// let fact = 1;

// Calculate the factorial of the number
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }

// Print the factorial of the number
// console.log("Factorial of " + num + " is: " + fact);

// Object oriented programming
// The Object-Oriented Programming (OOP) paradigm organizes code around objects, which are instances of classes that encapsulate data and behavior. It focuses on modeling real-world entities, making programs more modular, scalable, and reusable.

// class Signup {
//     constructor(userid, name, emailid, sex, mob) {
//         this.userid = userid;
//         this.name = name;
//         this.emailid = emailid;
//         this.sex = sex;
//         this.mob = mob;
//     }

//     create(userid, name, emailid, sex, mob) {
//         console.log("Welcome to our platform!\nLet's create your account\n");
//         this.userid = 98765;
//         this.name = "Alex Doe";
//         this.emailid = "alex.doe@example.com";
//         this.sex = 'M';
//         this.mob = 1234567890;
//         console.log("Your account has been created successfully!");
//     }
// }

// console.log("Platform Initialized!");
// let s1 = new Signup();
// s1.create(42, "Jordan", "jordan@example.com", 'N', 5678901234);

// Declarative programming paradigm
// The declarative programming paradigm focuses on what the program should accomplish rather than how to achieve it. It expresses logic and relationships without explicitly defining step-by-step instructions

// Declarative Approach (Preferred in Functional Programming)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// // Imperative Approach (Step-by-Step Control)
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbersWay2 = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbersWay2.push(numbers[i]);
//     }
// }
// console.log(evenNumbersWay2); // Output: [2, 4, 6, 8, 10]

// const num2 = [1, 2, 3, 4];
// const squaredNumbers = num2.map(num => num ** 2);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// const num3 = [1, 2, 3, 4, 5];
// const sum1 = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum1); // Output: 15

// Functional Programming (FP) Paradigm

// The functional programming paradigm is based on the concept of pure functions, immutability, and higher-order functions. It treats computation as the evaluation of mathematical functions and avoids changing state or mutable data.

// Pure function: Always returns the same result for the same input
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5
// console.log(add(2, 3)); // Output: 5 (Always the same)

// const numbers = [1, 2, 3, 4, 5];

// // Mapping: Creates a new array by squaring each number
// const squared = numbers.map(num => num ** 2);
// console.log(squared); // Output: [1, 4, 9, 16, 25]

// // Filtering: Returns only even numbers
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // Output: [2, 4]

// // Reducing: Calculates the sum of all numbers
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// // Using Higher-Order Functions
// // A function that returns another function
// const multiplyBy = factor => num => num * factor;

// const double = multiplyBy(2);
// console.log(double(5)); // Output: 10

// const triple = multiplyBy(3);
// console.log(triple(5)); // Output: 15

// const person = { name: "Ali", age: 25 };
// const updatedPerson = { ...person, age: 26 }; // Creating a new object instead of modifying the original
// console.log(updatedPerson); // Output: { name: "Ali", age: 26 }

// Higher-Order Functions (HOFs)

// Example: map(), filter(), and reduce() (Built-in HOFs)
// Passing Functions as Arguments
// const numbers = [1, 2, 3, 4, 5];

// // map() applies the provided function to each element
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// // filter() returns only elements that satisfy the condition
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // Output: [2, 4]

// // reduce() accumulates values into a single result
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// // Returning Functions (Function Factory)
// // Example: Function that generates customized functions
// const multiplyBy = (factor) => (num) => num * factor;

// // Creating specific functions
// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
