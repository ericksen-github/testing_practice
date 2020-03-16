const reverseString = someString => {
  let reversedString = "";

  for (let i = someString.length - 1; i >= 0; i--) {
    reversedString += someString.charAt(i);
  }
  return reversedString;
};

module.exports = reverseString;
