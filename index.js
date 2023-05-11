// Iteration 1: Names and Input
//driver
let hacker1 = "Arabella Mcfarlane Mcdonald";
console.log(`The driver's name is ${hacker1}`);

//navigator
let hacker2 = "Kwame";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "the driver has longest name, it has",
    hacker1.length,
    " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has ",
    hacker2.length,
    " characters"
  );
} else {
  console.log(
    "Wow, you both have equally long names",
    hacker1.length,
    "characters"
  );
}

// Iteration 3: Loops

// Code for 3.1
let driverName = hacker1.toUpperCase().split("").join(" ");
console.log(driverName);

///
// another option
// split(), reverse(), join(),

let reverseName = " ";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName = hacker1.toUpperCase();
  //   reverseName += hacker1[i].toUpperCase() + " ";
}
console.log(reverseName);
