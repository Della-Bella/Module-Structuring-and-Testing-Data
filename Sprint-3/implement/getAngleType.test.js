//const getAngleType = require('./getAngleType'); // Adjust the path if necessary

//Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle

/*describe("getAngleType function", () => {
  test('should return "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });
});*/

test(`should return "Right angle" exactly for 90 degrees`, function () {
  expect(getAngleType(90)).toBe("Right angle");
});
