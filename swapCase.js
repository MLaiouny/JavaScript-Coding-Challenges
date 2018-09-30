/* jshint esversion: 6 */

function SwapCase(str) {
	let myStr = str.split('');
	for (let i = 0; i < myStr.length; i++) {
		if (myStr[i] === myStr[i].toUpperCase()) {
			myStr[i] = myStr[i].toLowerCase();
		} else {
			myStr[i] = myStr[i].toUpperCase();
		}
	}

	return myStr.join('');
}

console.log(SwapCase('Hello-LOL'));
