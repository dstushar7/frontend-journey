"use strict";
let lname;
lname = 'John';
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
let dob = "25";
let result = parseInt(dob);
console.log(result);
let empList;
empList = ["Hello", "World"];
let numList;
numList = [1, 2, 3, 4];
let results = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
let num = numList.find((num) => num > 2);
console.log(results);
console.log(num);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs; // Tuples
// UDF
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[1]);
