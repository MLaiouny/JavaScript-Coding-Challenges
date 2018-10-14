// Challenge

// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
// Sample Test Cases
// Input:1, 42, 42, 180

// Output:"42 42"

// Input:4, 90

// Output:"90 4"

/* jshint esversion: 6 */
function SecondGreatLow(arr) {
	let obj = {};
	let myArr = arr.sort(function(a, b) {
		return a - b;
	});
	for (let i = 0; i < myArr.length; i++) {
		if (obj[myArr[i]]) {
			myArr.splice(i, 1);
		} else {
			obj[myArr[i]] = 1;
		}
	}
	console.log(myArr);

	if (myArr.length == 2) {
		return myArr[1] + ' ' + myArr[0];
	} else {
		return myArr[1] + ' ' + myArr[myArr.length - 2];
	}
}
console.log(SecondGreatLow([7, 7, 12, 98, 106]));
