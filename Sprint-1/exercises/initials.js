// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.




let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

function initials() {
    return `${firstName[0]}${middleName[0]}${lastName[0]}`; 
}

console.log(initials());
