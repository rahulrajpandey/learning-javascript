/* First Example: Get the full name for each person in the array */

var persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

function getFullName(item) {
    var fullname = [item.firstname, item.lastname].join(" ");
    return fullname;
}

function myFunction() {
    return persons.map(getFullName);
}

let fullNames = myFunction();
console.log(fullNames); // [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ]

/* Second Example: Multiply all the values in array with 10 */

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(multiplyFunction);

function multiplyFunction(num) {
    return num * 10;
}

console.log(newarray); // [ 650, 440, 120, 40 ]

/* Third Example: Find Square root of all the values in array */

var arrNumber = [4, 9, 16, 25];
console.log(arrNumber.map(num => Math.sqrt(num))); // [ 2, 3, 4, 5 ]

