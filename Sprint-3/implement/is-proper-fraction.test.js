const isProperFraction = require("./isProperFraction");

describe("isProperFraction", () => {
  // Proper Fraction check
  test("should return true for a proper fraction (numerator < denominator)", () => {
    expect(isProperFraction(2, 3)).toBe(true); // 2/3 is a proper fraction
  });

  // Improper Fraction check
  test("should return false for an improper fraction (numerator >= denominator)", () => {
    expect(isProperFraction(5, 2)).toBe(false); // 5/2 is an improper fraction
  });

  // Zero Denominator check
  test("should throw an error for a zero denominator", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero");
  });

  // Negative Proper Fraction check
  test("should return true for a negative proper fraction (|numerator| < denominator)", () => {
    expect(isProperFraction(-4, 7)).toBe(true); // -4/7 is a proper fraction
  });

  // Equal Numerator and Denominator check
  test("should return false for a fraction with equal numerator and denominator", () => {
    expect(isProperFraction(3, 3)).toBe(false); // 3/3 is not a proper fraction (it's 1)
  });

  // Negative Improper Fraction check
  test("should return false for a negative improper fraction (|numerator| >= denominator)", () => {
    expect(isProperFraction(-5, 4)).toBe(false); // -5/4 is an improper fraction
  });

  // Positive Proper Fraction check
  test("should return true for a positive proper fraction", () => {
    expect(isProperFraction(3, 4)).toBe(true); // 3/4 is a proper fraction
  });

  // Negative Proper Fraction check (absolute value less than denominator)
  test("should return true for a negative proper fraction with numerator absolute value less than denominator", () => {
    expect(isProperFraction(-1, 5)).toBe(true); // -1/5 is a proper fraction
  });
});
