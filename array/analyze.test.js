const analyze = require("./analyze");

test("finds the 1 as the lowest, 12 as the largest, 5.14 as the average, and 7 as the length", () => {
  expect(analyze([6, 2, 3, 12, 1, 5, 7])).toEqual({
    min: 1,
    max: 12,
    average: 5.1,
    length: 7
  });
});
