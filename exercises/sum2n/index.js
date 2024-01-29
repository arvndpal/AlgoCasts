/*
given a function with sum(1)(2)(3)...();
have to retrun sum of arguments passed
*/

//Solution 1
// function sum(a) {
//   return function(b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   }
// }
// solution 2
const sum = a => b => b ? sum(a + b) : a;


module.exports = sum;