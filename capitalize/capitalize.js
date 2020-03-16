function capitalize(string) {
  let letter = string.slice(0, 1);
  string = string.slice(1);
  string = letter.toUpperCase() + string;

  return string;
}
module.exports = capitalize;
