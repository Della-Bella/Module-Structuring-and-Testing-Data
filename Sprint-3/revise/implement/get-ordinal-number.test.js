

const getOrdinalNumber = require("./getordinalnumber");


test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});