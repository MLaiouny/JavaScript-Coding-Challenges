// Challenge

// Using the JavaScript language, have the function StringMerge(str) read the str parameter
// being passed which will contain a large string of alphanumeric characters with a single asterisk
//  character splitting the string evenly into two separate strings. Your goal is to return a
//  new string by pairing up the characters in the corresponding locations in both strings.
//  For example: if str is "abc1*kyoo" then your program should return the string akbyco1o
//  because a pairs with k, b pairs with y, etc. The string will always split evenly with the
//  asterisk in the center.
// Sample Test Cases
// Input:"aaa*bbb"

// Output:"ababab"

// Input:"123hg*aaabb"

// Output:"1a2a3ahbgb"

/* jshint esversion: 6 */
function StringMerge(str) {
	let myStr = str.split('*');
	let myReturn = '';
	for (let i = 0; i < myStr[0].length; i++) {
		myReturn = myReturn + myStr[0][i] + myStr[1][i];
	}
	return myReturn;
}

// console.log(StringMerge("aaa*bbb"));
console.log(StringMerge('123hg*aaabb'));
