// trim()

let firstName = "     Himanshu     ";
console.log(firstName);
console.log(firstName.length);

let newString = firstName.trim();
console.log(newString);
console.log(newString.length);

// touppercase()

let secondName = "Himanshu";
secondName = secondName.toUpperCase();
console.log(secondName);

// tolowercase()

let thirdName = "HIMANSHU";
thirdName = thirdName.toLowerCase();
console.log(thirdName);

// slice()

let secondString = secondName.slice(1, 4);
let thirdString = secondName.slice(4);
console.log(secondString);
console.log(thirdString);
