const caesar = function(text, shift) {
  let charCodeArray = [];
  shift = shift % 26;
  for (let i = 0; i < text.length; i++) {
    let current = text.charCodeAt(i);
    if (current < 65 || current > 90) {
      if (current < 97 || current > 122) {
        charCodeArray.push(text[i]);
        continue;
      }
    }
    if (current + shift < 65) {
      current += 26;
    } else if (current + shift > 90) {
      if (current + shift > 122) {
        current -= 26;
      } else if (current <= 90) {
        current -= 26;
      } else if (current + shift < 97) {
        current += 26;
      }
    }
    charCodeArray.push(current + shift);
    charCodeArray[i] = String.fromCharCode(charCodeArray[i]);
  }
  return charCodeArray.join("");
};

module.exports = caesar;
