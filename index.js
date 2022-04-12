// 1. Ways to print in Javascript
// console.log("Hello world");
// alert("ME");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello world", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an Error");

// 3. Javascript variabels
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in Javascript

// Number
var num1 = 455;
var num2 = 45.454;

// String
var str1 = "This is a String";
var str2 = "This is a String";

// object
var marks = {
  ravi: 34,
  shubham: 78,
  harry: 99.9,
};
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

//var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

// Array
var arr = [1, 2, "Hello", 4, 5];
// console.log(arr);

/*At a very High level, There are two types of data types in JavaScript 
1. Primitive data types: Undefine, Null, Number, String, boolean, Symbol.
2. Reference data types: Array and Object. */

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/
