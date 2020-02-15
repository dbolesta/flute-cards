// checks if number is even
// returns a boolean
export function isEven(n) {
  return n % 2 === 0;
}

// replaces first character of string with uppercase
export function uppercaseFirstChar(str) {
  return str.replace(/^\w/, c => c.toUpperCase());
}
