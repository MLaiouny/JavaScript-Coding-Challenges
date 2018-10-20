// Challenge;

// Using the JavaScript language, have the function Division(num1,num2) take both parameters being
//  passed and return the Greatest Common Factor. That is, return the greatest number that evenly
//  goes into both numbers with no remainder. For example: 12 and 16 both are divisible
//  by 1, 2, and 4 so the output should be 4. The range for both parameters will be
//  from 1 to 10^3.

// Sample Test Cases
// Input:7 & num2 = 3

// Output:1

// Input:36 & num2 = 54

// Output:18

/* jshint esversion:6 */
function Division(str) {
	let myStr = str.split(' ');
	let num1 = myStr[0];
	let num2 = myStr[2][5] + myStr[2][6];
	console.log(typeof num2);
	let small = num1 < num2 ? num1 : num2;
	let big = num1 > num2 ? num1 : num2;
	let greatestCommonFactor = 1;
	for (let i = 1; i <= small; i++) {
		if (big % i === 0 && small % i === 0) {
			greatestCommonFactor = i;
		}
	}
	console.log(typeof greatestCommonFactor);
	return greatestCommonFactor;
}

console.log(Division('36 & num2=54'));
