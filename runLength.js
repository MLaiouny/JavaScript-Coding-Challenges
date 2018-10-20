// Challenge

// Using the JavaScript language, have the function RunLength(str) take the str parameter being
// passed and return a compressed version of the string using the Run-length encoding algorithm.
// This algorithm works by taking the occurrence of each repeating character and outputting that
// number along with a single character of the repeating sequence. For example: "wwwggopp" would
// return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Sample Test Cases
// Input:"aabbcde"

// Output:"2a2b1c1d1e"

// Input:"wwwbbbw"

// Output:"3w3b1w"

/* jshint esversion: 6 */
function RunLength(str) {
	let count = 0;
	let myResult = '';
	let letter = str[0];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === letter) {
			count++;
		} else {
			myResult = myResult + count + letter;
			letter = str[i];
			count = 1;
		}
	}
	if ((i = str.length - 1)) {
		myResult = myResult + count + str[i];
	}
	return myResult;
}

console.log(RunLength('wwwbbbw'));
