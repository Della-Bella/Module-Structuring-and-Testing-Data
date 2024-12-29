
/*test("rotates lowercase letters correctly", function () {
  expect(rotateChar("a", 3)).toBe("d"); // 'a' -> 'd'
  expect(rotateChar("f", 1)).toBe("g"); // 'f' -> 'g'
  expect(rotateChar("F", 1)).toBe("G"); // 'f' -> 'g'
  expect(rotateChar("z", 1)).toBe("a"); // Wraparound: 'z' -> 'a'
});*/

const rotateChar = require("./rotate-char");

describe("rotateChar Function Tests", () => {
  // Test lowercase rotations
  test("rotates lowercase letters correctly", () => {
    expect(rotateChar("a", 3)).toBe("d"); // 'a' -> 'd'
    expect(rotateChar("f", 1)).toBe("g"); // 'f' -> 'g'
    expect(rotateChar("z", 1)).toBe("a"); // Wraparound: 'z' -> 'a'
  });

  // Test uppercase rotations
  test("rotates uppercase letters correctly", () => {
    expect(rotateChar("A", 3)).toBe("D"); // 'A' -> 'D'
    expect(rotateChar("F", 1)).toBe("G"); // 'F' -> 'G'
    expect(rotateChar("Z", 1)).toBe("A"); // Wraparound: 'Z' -> 'A'
  });

  // Test non-letter characters
  test("returns non-letter characters unchanged", () => {
    expect(rotateChar("1", 5)).toBe("1"); // Non-letter: '1'
    expect(rotateChar("!", 2)).toBe("!"); // Non-letter: '!'
    expect(rotateChar("@", 1)).toBe("@"); // Non-letter: '@'
  });

  // Test negative shifts (backwards rotation)
  test("rotates letters backwards correctly", () => {
    expect(rotateChar("d", -3)).toBe("a"); // 'd' -> 'a'
    expect(rotateChar("G", -2)).toBe("E"); // 'G' -> 'E'
    expect(rotateChar("B", -5)).toBe("W"); // 'B' -> 'W'
  });

  // Test large positive shifts (wraparound multiple times)
  test("handles large positive shifts correctly", () => {
    expect(rotateChar("a", 26)).toBe("a"); // Shift by a full circle (26 positions)
    expect(rotateChar("A", 26)).toBe("A"); // Shift by a full circle (26 positions) 
  });
});



