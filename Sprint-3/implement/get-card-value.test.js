 //When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

const getCardValue = require("./get-card-value");

test(`card string input returns number`, function () {
  const currentInput = getCardValue('this is a string');
  const targetInput = 10;
  expect(currentInput).toBe(targetInput);
});


// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

test(`card string input returns number`, function () {
  const currentInput = getCardValue('3');
  const targetInput = 3;
  expect(currentInput).toBe(targetInput);
});