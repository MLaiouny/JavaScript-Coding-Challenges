// Challenge

// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Sample Test Cases
// Input:5,10,15

// Output:"Arithmetic"

// Input:2,4,16,24

// Output:-1

/* jshint esversion: 6 */
function ArithGeo(arr) {
	let addAmount = arr[1] - arr[0];
	let multiplyRatio = arr[1] / arr[0];
	let isArithmetic = true;
	let isGeometric = true;
	// console.log(addAmount);
	// console.log(multiplyRatio);
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] != addAmount) {
			isArithmetic = false;
		}
	}

	for (let j = 1; j < arr.length; j++) {
		if (arr[j] / arr[j - 1] != multiplyRatio) {
			isGeometric = false;
		}
	}
	if (isArithmetic) {
		return 'Arithmetic';
	} else if (isGeometric) {
		return 'Geometric';
	} else {
		return -1;
	}
}

console.log(ArithGeo([2, 4, 16, 24]));
