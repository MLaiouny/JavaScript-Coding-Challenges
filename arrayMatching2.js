// Challenge

// Using the JavaScript language, have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

// If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.
// Sample Test Cases
// Input:"[5, 2, 3]", "[2, 2, 3, 10, 6]"

// Output:"7-4-6-10-6"

// Input:"[1, 2, 1]", "[2, 1, 5, 2]"

// Output:"3-3-6-2"

/* jshint esversion: 6 */
function ArrayMatching(strArr) {
	let sumArray = [];
	let smallLength = 0;
	let bigLength = 0;
	let bigIndex = 0;
	let length1 = strArr[0].length;
	let length2 = strArr[1].length;
	if (length1 < length2) {
		smallLength = length1;
		bigLength = length2;
		bigIndex = 1;
	} else {
		smallLength = length2;
		bigLength = length1;
		bigIndex = 0;
	}
	// console.log(length1, length2);
	// console.log(smallLength);
	for (let i = 0; i < smallLength; i++) {
		let sum = strArr[0][i] + strArr[1][i];
		sumArray.push(sum);
	}
	for (j = smallLength; j < bigLength; j++) {
		sumArray.push(strArr[bigIndex][j]);
	}
	return sumArray.join('-');
}

// console.log(ArrayMatching([[5,2,3], [2, 2, 3, 10, 6]]));
console.log(ArrayMatching([[1, 2, 1], [2, 1, 5, 2]]));
