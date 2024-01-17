/* function countChar(str) {
    / turn string to an array
  let strArr = str.split('')
  let strCount = {}
    / map through each character and add character 
  for (let i = 0; i < strArr.length; i++) {
      / increment by 1 if property exists
    if (strCount.hasOwnProperty(strArr[i])) {
        strCount[strArr[i]] += 1
    } else {
          / add property and set to 1
        strCount[strArr[i]] = 1
    }
  }
  console.log(strCount)
  return strCount
}

function test(expected, actual, testName){
    if(actual == expected){
        console.log(`${testName} passed`)
    }
    else{
        console.log(`${testName } failed... expected ${expected} but was ${actual}`) 
    }
}
    let result = countChar('Mississippi')
    test(2, result['p'], "test 1")
    test(4, result['s'], "test 2")
    test(4, result['i'], "test 3")

    let result2 = countChar('aaa')
    test(3, result2['a'], "test 4")
    test(1, result2.ownProperty(), "test 1")
    test(4, result2['i'], "test 3")

    test("aco1", "aco", "dummy test")
    
    //    console.log(missChar)
//    countChar('apple')

 */

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


/* REVERSE LINKED LIST 

Given the head of a singly linked list, reverse the list, and return the reversed list.

Examples: 

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

*/





/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
  // create empty array variable
    let answerArr = []
    // write first for loop
    for (let i = 0; i < nums.length; i++) {
      // write nested for loop 
        for ( let j = i + 1; j < nums.length; j++) {
          // create if statement if sum of both numbers of each for loop equal target
            if (nums[i] + nums[j] === target) {
              // push indexes of numbers that equal target into empty array
                answerArr.push(i)
                answerArr.push(j)
            }
        }
    }
    console.log(answerArr)
    return answerArr
};