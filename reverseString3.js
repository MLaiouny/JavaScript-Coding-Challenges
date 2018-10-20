/* jshint esversion:6 */
function ReverseString3(str) {
	let myStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		myStr += str[i];
	}
	return myStr;
}

console.log(ReverseString3('challenge'));
