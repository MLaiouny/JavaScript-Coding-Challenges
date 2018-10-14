// Challenge

// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"
// Sample Test Cases
// Input:1,2,3,4

// Output:"false"

// Input:1,2,5,10

// Output:"true"

/* jshint esversion: 6 */
function SuperIncreasing(arr) {
	let nums = [];
	let runningTotal = 0;
	for (let i = 1; i < arr.length; i++) {
		nums.push(arr[i - 1]);
		for (let j = 0; j < nums.length; j++) {
			runningTotal += nums[j];
		}
		if (arr[i] < runningTotal) {
			return false;
		}
	}
	return true;
}

console.log(SuperIncreasing([1, 2, 5, 10]));
