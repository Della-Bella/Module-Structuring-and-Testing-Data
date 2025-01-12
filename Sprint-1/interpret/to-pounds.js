
const penceString = "399p";
//declare a variable and assine a value 339p to it. 

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);// This line removes the trailing "p" from the penceString

//penceString.length gives the total length of the string ("399p" has 4 characters).

//penceString.length - 1 gives the index of the last character before the "p".

// substring(0, penceString.length - 1) extracts a substring from the beginning of the string (index 0) up to, but not including, the last character.

// This effectively removes the "p" from the end of the string, resulting in "399".*/

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//This line pads the penceStringWithoutTrailingP with leading zeros to ensure it has a minimum length of 3 characters
//adds "0" characters to the beginning of the string until its length reaches 3.
//If the string is already 3 characters long, it remains unchanged.
//If the string is shorter, it is padded with zeros at the beginning.
//For example, "399" remains "399", while "99" becomes "099" and "9" becomes "009".

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); 

//This line extracts the pound value from the padded string 
//It extracts a substring from the beginning of the paddedPenceNumberString up to two characters before the end.
//For example, if paddedPenceNumberString is "399", it extracts "3" (representing 3 pounds).

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); //This line extracts the pence value from the padded string and pads it with trailing zeros.

console.log(`£${pounds}.${pence}`);
//This line prints the formatted price to the console.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with initialising a string variable with the value "399p"
// const penceString = "399p";

//practising

let str = "Hello, world!";
let result = str.substring(0, 5); // Extracts "Hello"
console.log(result); // Outputs: Hello

let result2 = str.substring(7); // Extracts "world!" (from index 7 to the end)
console.log(result2); // Outputs: world!
