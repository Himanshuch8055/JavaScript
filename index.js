// 1. Ways to print in Javascript
// console.log("Hello world");
// alert("ME");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello world", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an Error");

// 3. Javascript variabels
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in Javascript

// Number
// var num1 = 455;
// var num2 = 45.454;

// String
// var str1 = "This is a String";
// var str2 = "This is a String";

// object
// var marks = {
//   ravi: 34,
//   shubham: 78,
//   harry: 99.9,
// };
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

//var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// Array
// var arr = [1, 2, "Hello", 4, 5];
// console.log(arr);

/*At a very High level, There are two types of data types in JavaScript 
1. Primitive data types: Undefine, Null, Number, String, boolean, Symbol.
2. Reference data types: Array and Object. */

// Operators in JavaScript
// Arithmetic Operators
// var a = 100;
// var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 34;
// var y = 56;
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
// function avg(a, b) {
//   c = (a + b) / 2;
//   return c;
// }
// DRY = Do not repeat yourself
// c1 = avg(4, 6);
// c2 = avg(14, 16);
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

//For loop in JavaScript
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     // break;
//     continue;
//   }
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);
// });

// const ac = 0;
// ac++;
// ac = ac + 1;

// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.shift()
// myArr.push ("harry")
// const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);
// console.log(myArr.toString());
// console.log(myArr.sort());

// String Methods in JavaScript
// let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
// let elem = document.getElementById("click");
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("button");
// console.log(tn);
// tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ----> removes an element

//Documents
// document.location;
// document.title;
// document.URL;
// document.scripts;
// document.links;
// document.forms;
// document.images;
// document.domain;

//Selecting using Query
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

function clicked() {
  console.log("The button was clicked");
}
window.onload = function () {
  console.log("The document was loaded");
};

// Events in JavaScript
firstcontainer.addEventListener("click", function () {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b> We have clicked</b>";
  console.log("Clicked on Container");
});

firstcontainer.addEventListener("mouseover", function () {
  console.log("Mouse on Container");
});

firstcontainer.addEventListener("mouseout", function () {
  console.log("Mouse out of Container");
});
