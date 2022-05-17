// Undefine

let firstName;
console.log(typeof firstName);

var secondName;
console.log(typeof secondName);

// const firstNumber;
// console.log(typeof firstNumber);

let thirdName = "Himanshu";
console.log(typeof thirdName, thirdName);

// NULL

let myVariable = null;
console.log(myVariable);

myVariable = "Himanshu";
console.log(myVariable, typeof myVariable);

console.log(typeof null); // *****************************************

// BigInt

let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(myNumber + sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER); //*****************************

// typeof Operator

let age = 22;
let aName = "Himanshu";
console.log(typeof age);
console.log(typeof aName);
console.log(typeof "Himanshu");
console.log(typeof 5);

// Convert number to string

age = age + "";
console.log(typeof age);
console.log(typeof (age + ""));

// Convert string to Number

let mystr = +"34";
console.log(typeof mystr);

let aage = 18;
aage = String(aage);
console.log(typeof aage);

// string concatenation

let string1 = "Himanshu";
let string2 = "Chauhan";

let fullName = string1 + " " + string2;
console.log("*******");
console.log(fullName); //Himanshu chauhan

let string3 = "50";
let string4 = "10";

let fullToName = string3 + string4;
console.log("*******");
console.log(fullToName); //5010

let string5 = "50";
let string6 = "10";

let fullyName = +string5 + +string6;
console.log("*******");
console.log(fullyName); //60
