// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored
// in arr and return 1 if the mode equals the mean, 0 if they don't equal each other
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
// The array will not be empty, will only contain positive integers, and will not contain more
// than one mode.
// Sample Test Cases
// Input:1, 2, 3

// Output:0

// Input:4, 4, 4, 6, 2

// Output:1

/* jshint esversion: 6 */
function MeanMode(arr) {
	let mean = 0;
	let total = 0;
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		total = total + arr[i];
		if (obj[arr[i]]) {
			obj[arr[i]] += 1;
		} else {
			obj[arr[i]] = 1;
		}
	}
	mean = total / arr.length;
	let maximum = 0;
	let maxNum = 0;
	for (let key in obj) {
		if (obj[key] > maximum) {
			maximum = obj[key];
			maxNum = key;
		}
	}
	console.log(maxNum);
	if (mean == maxNum) {
		return 1;
	} else {
		return 0;
	}
}
console.log(MeanMode([5, 3, 3, 3, 1]));
