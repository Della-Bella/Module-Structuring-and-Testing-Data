//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// The code isin't work because slice is a method for strings and arrays, but cardNumber is defined as a number.
// use slice on a number will result in an error.

/* old submition

const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

function cardnumber() {
  return cardNumber.slice(-4);
}

console.log(cardnumber());*/

// New solution without modify the const cardNumber. I converted it to a String then used the function Slice, because Slice can only 
//be used in a string. 


const cardNumber = 4533787178994213;
const cardNumberString = cardNumber.toString(); 
const startIndex = cardNumberString.length - 4;
const last4Digits = cardNumberString.slice(startIndex);

console.log(last4Digits); 

