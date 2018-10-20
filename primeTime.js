// Challenge

// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being
//  passed and return the string true if the parameter is a prime number, otherwise return
//   the string false. The range will be between 1 and 2^16.

// Sample Test Cases
// Input:19

// Output:"true"

// Input:110

// Output:"false"

/* jshint esversion:6 */
function PrimeTime(num) {
	let myNum = Math.sqrt(num);
	for (let i = 2; i <= myNum; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(PrimeTime(19));
// Result: true
//console.log(PrimeTime(110));
// result: false;
