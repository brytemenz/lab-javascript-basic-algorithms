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
//code for 3.2
let reverseName = " ";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i].toUpperCase() + " ";
}
console.log(reverseName);

// code for 3.3
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else {
    continue;
  }
}
if (hacker1.length === hacker2.length) {
  console.log("What?! You both have the same name?.");
}
