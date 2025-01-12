// creditCardValidator.js

function isValidCreditCardNumber(creditCardNumber) {
  // 1. Check if the number is 16 digits long and contains only numbers
  if (creditCardNumber.length !== 16 || !/^\d+$/.test(creditCardNumber)) {
    return false;
  }

  // 2. Check for at least two different digits
  const uniqueDigits = new Set(creditCardNumber.split(""));
  if (uniqueDigits.size === 1) {
    return false;
  }

  // 3. Check if the last digit is even
  const lastDigit = parseInt(
    creditCardNumber.charAt(creditCardNumber.length - 1)
  );
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // 4. Calculate the sum of all digits
  const sumOfDigits = creditCardNumber
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  if (sumOfDigits <= 16) {
    return false;
  }

  return true;
}

module.exports = isValidCreditCardNumber;
