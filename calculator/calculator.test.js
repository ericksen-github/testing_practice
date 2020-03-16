const calculator = require("./calculator");

test("adds 5 + 6 to get 11", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("solves 5 - 3 to get 2", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies 5 and 3 to get 15", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("solves 15 divided by 5 to get 3", () => {
  expect(calculator.divide(15, 5)).toBe(3);
});
