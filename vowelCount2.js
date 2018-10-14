// his challenge requires you to return the number of vowels (a, e, i, o, u) in a string.
// For example, if the string is "All cows eat grass" then your program should return the integer 5.
// The first program is a basic loop that keeps track of the vowels it encounters.

/* jshint esversion:6 */
function VowelCount(str) {
	let myStr = str.toLowerCase();
	let vowels = ['a', 'e', 'o', 'i', 'u'];
	let count = 0;
	for (let i = 0; i < myStr.length; i++) {
		if (vowels.indexOf(myStr[i]) !== -1) {
			count += 1;
		}
	}
	return count;
}

console.log(VowelCount('All cows eat grass'));
