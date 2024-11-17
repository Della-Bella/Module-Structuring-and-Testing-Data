// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator.
//The function should return true.

const isProperFraction = require("./is-proper-fraction");

test(`return true if numerator < denominator `, function () {
  const numerator = 8;
  const denominator = 12;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = true;
  expect(currentInput).toBe(targetInput);
});

test(`return false if numerator >= denominator `, function () {
  const numerator = 12;
  const denominator = 12;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = false;
  expect(currentInput).toBe(targetInput);
});

test(`return error if denominator is zero`, function () {
  const numerator = 3;
  const denominator = 0;
  const targetInput = "Denominator can not be zero";
  expect(() => {
    isProperFraction(numerator, denominator);
  }).toThrow(targetInput);
});
