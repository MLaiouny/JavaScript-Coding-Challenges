// Challenge

// Using the JavaScript language, have the function Primes(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
// Sample Test Cases
// Input:4

// Output:"false"

// Input:1709

// Output:"true"

/* jshint esversion:6 */
function Primes(num) {
	switch (num) {
		case 1:
			return false;
		case 2:
			return false;
		default: {
			let pivot = Math.floor(Math.sqrt(num));
			for (let i = 2; i <= pivot; i++) {
				if (num % i === 0) {
					return false;
				}
			}

			return true;
		}
	}
}

console.log(Primes(1709));
