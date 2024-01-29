// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //   const reversed = n.toString().split("").reverse().join("");
  //   return parseInt(reversed) * Math.sign(n);
  let rev = 0;
  let num = n;
  let lastDigit;
  while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return rev;
}

module.exports = reverseInt;