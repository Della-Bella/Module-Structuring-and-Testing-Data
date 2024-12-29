const repeat = require("./repeat");

test("repeats string count times", () => {
  expect(repeat("hello", 3)).toBe("hellohellohello");
});

test("returns original string for count of 1", () => {
  expect(repeat("world", 1)).toBe("world");
});

test("returns empty string for count of 0", () => {
  expect(repeat("hello", 0)).toBe("");
});

test("throws error for negative count", () => {
  expect(() => repeat("hello", -1)).toThrow("Count cannot be negative.");
});