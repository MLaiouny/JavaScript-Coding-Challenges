// Challenge

// Using the JavaScript language, have the function LargestPair(num) take the num parameter being
//  passed and determine the largest double digit number within the whole number.
//   For example: if num is 4759472 then your program should return 94 because that is the largest
//   double digit number. The input will always contain at least two positive digits.

// Sample Test Cases
// Input:453857

// Output:85

// Input:363223311

// Output:63

/* jshint esversion:6 */
function LargestPair(num) {
	let maxIndex = -1;
	let max = 0;
	let myNum = num.toString();
	for (let i = 0; i < myNum.length - 1; i++) {
		if (myNum[i] > max) {
			max = myNum[i];
			maxIndex = i;
		}
	}
	return myNum[maxIndex] + myNum[maxIndex + 1];
}

// console.log(LargestPair(453857));
// Result: 85
console.log(LargestPair(363223311));
