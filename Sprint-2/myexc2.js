//function formatAs12HourClock("05:30") {}

//formatAs12HourClock("08:00") === "8:00 am";

//console.log("08:00" === "8:00 am")

//true === false;

/*let adtioncount= 5 == 2 + 4;
console.log(adtioncount)

let adtioncount2= 4 * 5 == "20";
console.log(adtioncount2)

let adtioncount3= 3 * 2 === 6;
console.log(adtioncount3)

let minimo= Math.min
function Match.min (minimo){
   Math.min(3, 4, 5) === 4;
}
console.log (minimo)

let mhairiName = "Mhairi";
typeof mhairiName === "string";
let mhairiAge = 28;
let isMhairiOldEnoughToDrive = true;
let kilometersMhairiDrivesToWork = 9.4;

"hello Mhairi" === `hello ${mhairiName}`;
"${mhairiName} is 28" === `Mhairi is ${mhairiAge}`;
isMhairiOldEnoughToDrive;
isMhairiOldEnoughToDrive === true;
mhairiAge >= 18;
29 <= mhairiAge;
Math.round(kilometersMhairiDrivesToWork) === 9;*/

/*const calculation = 10 + 32;
const result = 42;

console.assert(calculation === result);
console.log (calculation === result);*/

/*function formatAs12HourClock() {}
console.assert(formatAs12HourClock("08:00") === "08:00 am");
console.log (formatAs12HourClock); */


/*function formatAs12HourClock() {}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/

function formatAs12HourClock(time) {
  return `${time} am`;
}

/*const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/
/*
function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/

SyntaxError - If we Google “JavaScript SyntaxError”, MDN tells us this is “an error when trying to interpret syntactically invalid code”. So - we wrote some code which isn’t allowed.
Identifier - If we Google “JavaScript Identifier”, MDN tells us: this is “a sequence of characters in the code that identifies a variable, function, or property”. On line 12, the identifier is the variable name: currentOutput.
currentOutput - This is the variable name we used in our code. This is the identifier that the error is about.
has, already, and been are all standard English words with no special meaning.
declared - We learnt about this already in this course - a declaration is where we make a new name (e.g. a new variable) in JavaScript.
Reading that back, we can rephrase this error message:

We wrote some code which isn’t allowed. We tried to declare a new variable named currentOutput. But we had already declared something named currentOutput.