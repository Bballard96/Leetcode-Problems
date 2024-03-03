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


/* 
                            PLUS ONE 
                            (Finished)
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.


Increment the large integer by one and return the resulting array of digits. 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

var plusOne = function(digits) {
    // Convert array to BigInt
    let answer = BigInt(digits.join(''));  
    // Increment BigInt by 1
    answer += 1n;  
    // Convert BigInt to array of numbers
    let myArr = Array.from(String(answer), Number);  
    return myArr;
};



/*   Move Zeroes */





                                      /* Merge Sorted Array */
                                /* (Unfinished) started on 03/03/2024 */
/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n */

/*
Ex: 1
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Ex: 2
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Ex: 3 
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/