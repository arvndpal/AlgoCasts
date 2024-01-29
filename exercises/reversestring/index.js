// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution1
  //   return str.split('').reverse().join("");

  // solution2
  //   let reversed = '';
  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;

  //solution3
  const reversed = str.split("").reduce((reversed, char) => char + reversed, '');
  return reversed;
}

module.exports = reverse;