const getAngleType = require("./get-angle-type"); // Adjust the path if necessary

//Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle

test(`should return "Right angle" exactly for 90 degrees`, function () {
  const currentInput = getAngleType(90);
  const targetInput = "Right angle";
  expect(currentInput).toBe(targetInput);
});

test(`should return "Acute angle" when degrees is less than 90 degrees`, function () {
  const currentInput = getAngleType(45);
  const targetInput = "Acute angle";
  expect(currentInput).toBe(targetInput);
});

