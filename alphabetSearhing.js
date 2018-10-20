// Challenge

// Using the JavaScript language, have the function AlphabetSearching(str) take the str parameter
//  being passed and return the string true if every single letter of the English alphabet exists
//  in the string, otherwise return the string false. For example: if str
//  is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the string
//  true because every character in the alphabet exists in this string even though some
//  characters appear more than once.
// Sample Test Cases
// Input:"abcdefghijklmnopqrstuvwxyyyy"

// Output:"false"

// Input:"abc123456kmo"

// Output:"false"

/*jshint esversion:6 */
function AlphabetSearching(str) {
	let myStr = str.match(/[a-z]/gi, function(char) {
		return char;
	});
	let myObj = {};
	for (let i = 0; i < myStr.length; i++) {
		if (!myObj[myStr[i]]) {
			myObj[myStr[i]] = 1;
		}
	}
	let count = 0;
	for (key in myObj) {
		count++;
	}
	if (count === 26) {
		return true;
	} else {
		return false;
	}
}

// console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy"));
console.log(AlphabetSearching('zacxyjbbkfgtbhdaielqrm45pnsowtuv'));
