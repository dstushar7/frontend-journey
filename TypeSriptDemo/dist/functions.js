"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
// Rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(100, 100, ...numbers));
console.log(add2(100, 100, 100, 100, 100, 100));
// Generic Functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
console.log(concatResult);
//# sourceMappingURL=functions.js.map