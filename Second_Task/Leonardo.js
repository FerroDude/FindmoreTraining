const driver = "Alberto";
const navigator = "Joao";
//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newName = "";
for (i = 0; i < driver.length; i++) {
  newName = newName + driver[i] + " ";
}
let newname = newName.toUpperCase();
console.log(newname);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let namenew = "";
for (i = navigator.length - 1; i >= 0; i--) {
  namenew = namenew + navigator[i];
}
console.log(namenew);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?
// aqui vão precisar de um método localCompare(), pesquisem sobre este método

if (driver.localeCompare(navigator) < 0) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) == 0) {
  console.log("What?! You both have the same name?");
} else {
  console.log(" Yo, the navigator goes first definitely.");
}

console.log(1 == "1");
console.log(1 === "1");
console.log(1 === 1);
