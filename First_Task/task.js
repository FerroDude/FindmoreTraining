//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Ride";
//1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + hacker1);
console.log(`The driver's name is ${hacker1}`);
//1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = "Ride";
//1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + hacker2);
console.log(`The navigator's name is ${hacker2}`);
//Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.
if (hacker1.length > hacker2.length) {
  console.log(hacker1);
} else if (hacker1.length < hacker2.length) {
  console.log(hacker2);
} else {
  console.log("equal");
}
