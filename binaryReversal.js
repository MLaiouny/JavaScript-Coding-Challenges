// Challenge

// Using the JavaScript language, have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
// Sample Test Cases
// Input:"213"

// Output:"171"

// Input:"4567"

// Output:"60296"

/* jshint esversion:6 */
function BinaryReversal(str) {
	let myNum = parseInt(str, 10).toString(2);
	let myLength = myNum.length;
	//console.log(myLength);
	// add leading zeroes
	let byteString = `${'0'.repeat(
		myLength % 8 === 0 ? 0 : 8 - (myLength % 8)
	)}${myNum}`;
	//return byteString;

	let stringByte = byteString
		.split('')
		.reverse()
		.join('');
	let myResult = parseInt(stringByte, 2);
	return myResult;
}

console.log(BinaryReversal('213'));
