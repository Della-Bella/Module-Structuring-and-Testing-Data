


/*test("Should validate a number with at least 5 characters", () => {
  const input = 112206;
  const output = isNumberValid(input);
  expect(output).toBe(true); // A valid number
});

test("Should invalidate a string longer than one character", () => {
  const input = "password";
  const output = isNumberValid(input);
  expect(output).toBe(false); // Invalid because it's longer than one character
});

test("Should validate a single uppercase letter", () => {
  const input = "A";
  const output = isNumberValid(input);
  expect(output).toBe(true); // Valid
});

test("Should invalidate a special character not in the list", () => {
  const input = "@";
  const output = isNumberValid(input);
  expect(output).toBe(false); // Invalid because "@" is not in the list of special characters
});*/


// passwordValidator.test.js
const isValidPassword = require('./password-validator');

describe('isValidPassword', () => {
  it('should return true for a valid password', () => {
    const password = 'MyStrongPass123!';
    const previousPasswords = ["oldPass1", "oldPass2"];
    expect(isValidPassword(password, previousPasswords)).toBe(true);
  });

  it('should return false for a password shorter than 5 characters', () => {
    const password = 'Pass';
    const previousPasswords = [];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });

  it('should return false if no uppercase letter is present', () => {
    const password = 'mystrongpass123!';
    const previousPasswords = [];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });

  it('should return false if no lowercase letter is present', () => {
    const password = 'MYSTRONGPASS123!';
    const previousPasswords = [];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });

  it('should return false if no digit is present', () => {
    const password = 'MyStrongPass!';
    const previousPasswords = [];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });

  it('should return false if no special character is present', () => {
    const password = 'MyStrongPass123';
    const previousPasswords = [];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });

  it('should return false if the password is in the previousPasswords array', () => {
    const password = "oldPass1";
    const previousPasswords = ["oldPass1", "oldPass2"];
    expect(isValidPassword(password, previousPasswords)).toBe(false);
  });
});




