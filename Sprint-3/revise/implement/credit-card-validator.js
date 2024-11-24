

function creditCardValidator(cardnumber){
  const digits16 = (cardnumber.length === 16); //Number must be 16 digits, all of them must be numbers.
  
  if (cardnumber[0] ===  cardnumber[2] &&& ) {
    return false; // They are the same
  } else {
    return true;
  }
};

console.log (creditCardValidator("298947486556"));
console.log(creditCardValidator("111222345666667890"));
console.log(creditCardValidator("0000000000000000"));