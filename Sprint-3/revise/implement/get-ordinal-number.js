// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastTwoDigits = number % 100; // Get the last two digits
  const lastDigit = number % 10; // Get the last digit

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return number + "th"; // Special cases for 11, 12, 13
  } else if (lastDigit === 1) {
    return number + "st";
  } else if (lastDigit === 2) {
    return number + "nd";
  } else if (lastDigit === 3) {
    return number + "rd";
  } else {
    return number + "th";
  }
}

module.exports = getOrdinalNumber;


//const input = 1;
//const input = 4;
//4 as an ordinal number will be 4th
//const input = 12;
//12 as an ordinal number will be 12th





