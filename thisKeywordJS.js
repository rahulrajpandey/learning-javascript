/* without strict mode */
console.log("This Keyword Examples"); // This Keyword Examples

/* First Example: In an object method, this refers to the owner object */
var person = {
    firstName: "Rahul",
    lastName: "Raj",
    id: 111,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Rahul Raj

/* Second Example: this Alone */
/**
 * In the global execution context (outside of any function), 
 * this refers to the global object whether in strict mode or not.
 */
var x = this;
console.log(x); // {}
console.log(x.parent); // undefined

/* Third Example: this in a Function not in strict mode*/
/**
 * Inside a function, the value of this depends on how the function is called.
 * Since the following code is not in strict mode, and because the value of this is not set by the call, 
 * this will default to the global object.
 */
function myFunction() {
    return this;
}

var myFunctionValue = myFunction();
console.log(myFunctionValue); // Object [global]

/* Fourth Example: this in a Function in strict mode*/
/*
JavaScript strict mode does not allow default binding.
So, when used in a function, in strict mode, this is undefined.
*/
function myFunctionStrict() {
    "use strict";

    return this;
}

var myFunctionStrictValue = myFunctionStrict();
console.log(myFunctionStrictValue); // undefined
console.log(myFunctionStrict()); // undefined

/* Fifth Example: Object Method Binding */
var Employee = {
    name: "Rahul Raj",
    designation: "Applications Engineer",
    department: "Open Source Community",
    myFunction: function () { return this; }
};

var employeeRef = Employee.myFunction();
console.log(employeeRef);
/*
{
  name: 'Rahul Raj',
  designation: 'Applications Engineer',
  department: 'Open Source Community',
  myFunction: [Function: myFunction]
}
*/

/* Sixth Example: Explicit Function Binding */
/* 
In the example below, when calling person1.fullName with person2 as argument, 
this will refer to person2, even if it is a method of person1.
*/
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var person2 = {
    firstName: "Rahul",
    lastName: "Raj",
};

console.log(person1.fullName.call(person2)); // Rahul Raj

/* ----------------- Examples -------------------- */

function add(c, d) {
    return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// The first parameter is the object to use as 'this', subsequent parameters are passed as
// arguments in the function call
console.log(add.call(o, 5, 7)); // 16

// The first parameter is the object to use as 'this', the second is an array whose
// members are used as the arguments in the function call
console.log(add.apply(o, [10, 20])); // 34

/* 
Note that in non–strict mode, with call and apply, if the value passed as this is not an object, 
an attempt will be made to convert it to an object. Values null and undefined become the global object. 
Primitives like 7 or 'foo' will be converted to an Object using the related constructor 
*/
function bar() {
    console.log(Object.prototype.toString.call(this));
}

console.log(bar.call(7));     // [object Number]
console.log(bar.call('foo')); // [object String]
console.log(bar.call(undefined)); // [object global]

