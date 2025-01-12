

const isValidCreditCardNumber = require("./cardvalidator");

describe("isValidCreditCardNumber", () => {
  it("should return true for a valid credit card number", () => {
    expect(isValidCreditCardNumber("9999777788880000")).toBe(true);
    expect(isValidCreditCardNumber("6666666666661666")).toBe(true);
  });

  it("should return false for invalid credit card numbers", () => {
    expect(isValidCreditCardNumber("a92332119c011112")).toBe(false);
    expect(isValidCreditCardNumber("4444444444444444")).toBe(false);
    expect(isValidCreditCardNumber("1111111111111110")).toBe(false);
    expect(isValidCreditCardNumber("6666666666666661")).toBe(false);
    expect(isValidCreditCardNumber("123456789012345")).toBe(false); // Less than 16 digits
  });
});
