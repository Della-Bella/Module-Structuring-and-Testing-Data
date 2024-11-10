/*const yearOfBirth = 1975; // declaration
const currentYear = 2024; // declaration

console.log `I am ${currentYear - yearOfBirth} years old`; // statement */

//console.log("hello there!");

function convertToPercentage(decimal) {
    return decimal * 100; // Converts a decimal to a percentage
}

/*let percentage = convertToPercentage(0.231);
console.log(`The percentage of 0.231 is ${percentage}%`);
______________________________

const decimalNumber = 0.34;
const percentage = decimalNumber * 100;

function convertToPercentage() {
  const percentage = `${decimalNumber * 100}%`;
}

console.log(`The percentage value of 0.34 is ${percentage}%`);*/

VARIABLES DECLARATIONS:

1. **Syntactic Features of a Variable Declaration**: In JavaScript, a variable declaration starts with keywords like `let`, `const`, or `var`, followed by the variable name, and optionally an assignment (`=`) with an initial value (e.g., `const age = 25;`).

2. **Why We Use Variable Declarations**: Variable declarations store data values in memory, allowing us to reference and manipulate these values throughout the code. They improve code readability and maintainability.

3. **Creating Strings Using Variables and Template Literals**: Template literals (enclosed in backticks) allow you to embed variables within strings using `${variableName}`. Example: 
   ```javascript
   const name = "Alice";
   console.log(`Hello, ${name}!`);

DECLARATON & STTAMENT :
   ```
Declaration: A declaration defines a variable, function, or constant in memory without necessarily assigning it a value immediately. Example: let age;

Statement: A statement is a complete instruction in code that performs an action. Examples include variable declarations, assignments, and function calls. Example: age = 25;

Difference Between Declaration and Statement: A declaration introduces variables or functions, often without performing any action, while a statement executes actions, including assignments and calculations.

Difference Between let and const: let allows variables to be reassigned, while const creates constants that cannot be reassigned after their initial assignment.

Define a Function in Programming: A function is a block of code designed to perform a specific task. It is defined using the function keyword, a name, parentheses, and curly braces containing the code

Evaluate a Function Expression: A function expression defines a function as part of an expression and can be assigned to a variable

Call a Function with an Input in REPL: In the REPL (Read-Eval-Print Loop), you can call a function by typing its name followed by parentheses with input values inside.


