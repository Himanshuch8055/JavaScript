let firstName = "Harshit";
let age = 21;

if (firstName[0] === "H") {
  console.log("Your name starts with 'H' ");
}
if (age > 18) {
  console.log("You are above 18");
}

if (firstName[0] === "H" && age > 18) {
  console.log("Name starts with H and above 18 ####");
} else {
  console.log("inside else");
}

if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}
