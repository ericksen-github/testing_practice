const reverse = require("./reverse");

test("reverses a word", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("reverses a string", () => {
  expect(reverse("hello world")).toBe("dlrow olleh");
});

test("reverses a string with numbers and punctuation", () => {
  expect(reverse("random 123 !.!")).toBe("!.! 321 modnar");
});
