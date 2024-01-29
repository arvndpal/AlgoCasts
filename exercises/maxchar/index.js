// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }
  let maxChar;
  let charCount = 0;
  for (let i in chars) {
    if (chars[i] > charCount) {
      maxChar = i;
      charCount = chars[i]
    }
  }
  return maxChar;
}

module.exports = maxChar;