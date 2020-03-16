const caesar = require("./caesar");

test("shifts a word 3 letters", () => {
  expect(caesar("hello", 3)).toBe("khoor");
});

test("shifts a string 6 letters", () => {
  expect(caesar("hello world", 6)).toBe("nkrru cuxrj");
});

test("shifts a string with capitalization, numbers, and punctuation 10 letters", () => {
  expect(caesar("Hello, world! It's day 325.", 10)).toBe(
    "Rovvy, gybvn! Sd'c nki 325."
  );
});
