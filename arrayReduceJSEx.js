'use strict';

/* First Example:  */

var numbers = [175, 50, 25];
const result = numbers.reduce(myFunc);

function myFunc(total, num) {
    return total - num;
}

console.log("Reduced Result: " + result); // Reduced Result: 100

/* Second Example: Round all the numbers in an array, and display the sum */

var numbersArr = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    return total + Math.round(num);
}

function myFunction() {
    return numbersArr.reduce(getSum, 0);
}

const resultantSum = myFunction();
console.log("Sum: " + resultantSum); // Sum: 24

/* Third Example: Sum of array of numbers */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log("Sum = " + array1.reduce(reducer)); // Sum = 10

// use initialValue as 5
console.log("Sum = " + array1.reduce(reducer, 5)); // Sum = 15

/* Fourth Example: Sum of values in an object array */

/* To sum up the values contained in an array of objects, 
you must supply an initialValue, so that each item passes through your function. */

let initialValue = 0
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, initialValue);

console.log(sum) // 6

/* Fifth Example: Flatten an Array of arrays */

let flattenArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenArray); // [1, 2, 3, 4, 5,6, 7, 8, 9]

