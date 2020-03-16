const capitalize = require("./capitalize");

test("capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes the first letter of a string", () => {
  expect(capitalize("long string test.")).toBe("Long string test.");
});

test("leaves first letter capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
