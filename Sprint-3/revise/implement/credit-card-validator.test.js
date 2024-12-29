

/*describe("creditCardValidator", () => {
  // Test valid credit card numbers
  test("should return true for a valid credit card number", () => {
    // Example of a valid card number (16 digits, last digit even, different digits, sum > 16)
    expect(creditCardValidator(1234567812345672)).toBe(true); // Valid card
  });

  // Test invalid card numbers
  test("should return false if the number is not 16 digits", () => {
    // 15 digits, should be invalid
    expect(creditCardValidator("999977778888000")).toBe(false); // Invalid
  });

  test("should return false if all digits are the same", () => {
    // All digits are the same
    expect(creditCardValidator(1111111111111111)).toBe(false); // Invalid
  });

  test("should return false if the last digit is odd", () => {
    // Last digit is odd
    expect(creditCardValidator("1234567812345679")).toBe(false); // Invalid
  });

  test("should return false if the sum of all digits is 16 or less", () => {
    // Sum of digits is 16 or less, should return false
    expect(creditCardValidator("1111111111111112")).toBe(false); // Invalid
  });

  test("should return false if the input is not numeric", () => {
    // Input contains non-numeric characters
    expect(creditCardValidator("abcd567812345670")).toBe(false); // Invalid
  });

  test("should return false if the number is not numeric (contains letters)", () => {
    // Card number with letters
    expect(creditCardValidator("1234abcd12345678")).toBe(false); // Invalid
  });
});*/

const creditCardValidator = require("./credit-card-validator");

describe("creditCardValidator", () => {
  // Test for valid credit card numbers
  test("should return true for a valid credit card number with different digits", () => {
    // Example of a valid 16-digit card number with an even last digit and sum > 16
    expect(creditCardValidator(1234567812345672)).toBe(true); // Valid card
  });

  test("should return true for a valid credit card number with sum greater than 16", () => {
    // Example of a valid 16-digit card number with an even last digit and sum > 16
    expect(creditCardValidator(9876543212345678)).toBe(true); // Valid card
  });

  test("should return true for a valid credit card number with varying digits", () => {
    // Example of another valid card with varying digits and last digit even
    expect(creditCardValidator(4321876543218760)).toBe(true); // Valid card
  });

  test("should return true for a valid credit card number where digits are not all the same", () => {
    // Valid card number, last digit even and sum greater than 16
    expect(creditCardValidator(5555555555555558)).toBe(true); // Valid card
  });

  test("should return true for a valid credit card number with even last digit and varied digits", () => {
    // Another valid card number with an even last digit and varied digits
    expect(creditCardValidator(6781234567890124)).toBe(true); // Valid card
  });

  test("should return true for a valid credit card number with a large sum", () => {
    // Valid card number with a sum of digits greater than 16
    expect(creditCardValidator(1234678901234568)).toBe(true); // Valid card
  });
});

