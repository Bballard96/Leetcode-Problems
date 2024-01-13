/* 
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

  Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21



*/

var reverse = function(x) {
  const INT_MIN = Math.pow(-2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  const sign = x < 0 ? -1 : 1;
  let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

  // Check for overflow
  if (reversed < INT_MIN || reversed > INT_MAX) {
      return 0;
  }

  return reversed;
};