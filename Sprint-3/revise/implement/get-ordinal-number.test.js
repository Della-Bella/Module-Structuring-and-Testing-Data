

const getOrdinalNumber = require("./get-ordinal-number");

test("converts 1 to '1st'", function () {
  const input = 1;
  const output = getOrdinalNumber(input);
  expect(output).toBe("1st"); // Expected result is '1st'
});

test("converts 2 to '2nd'", function () {
  const input = 2;
  const output = getOrdinalNumber(input);
  expect(output).toBe("2nd");
});

test("converts 3 to '3rd'", function () {
  const input = 3;
  const output = getOrdinalNumber(input);
  expect(output).toBe("3rd");
});

test("converts 4 to '4th'", function () {
  const input = 4;
  const output = getOrdinalNumber(input);
  expect(output).toBe("4th");
});

test("converts 11 to '11th'", function () {
  const input = 11;
  const output = getOrdinalNumber(input);
  expect(output).toBe("11th");
});

test("converts 23 to '23rd'", function () {
  const input = 23;
  const output = getOrdinalNumber(input);
  expect(output).toBe("23rd");
});

  test("returns '111th' for number 111", () => {
    expect(getOrdinalNumber(111)).toBe("111th");
  });

  test("returns '112th' for number 112", () => {
    expect(getOrdinalNumber(112)).toBe("112th");
  });

  test("returns '113th' for number 113", () => {
    expect(getOrdinalNumber(113)).toBe("113th");
  });