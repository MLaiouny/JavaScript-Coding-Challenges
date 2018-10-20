// Challenge

// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters
//  being passed and return the string true if a portion of str1 characters can be rearranged to
//  match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is
//  "world" the output should return true. Punctuation and symbols will not be entered with
//  the parameters.
// Sample Test Cases
// Input:"cdore" & str2= "coder"

// Output:"true"

// Input:"h3llko" & str2 = "hello"

// Output:"false"

/* jshint esversion:6 */
function StringScramble(str) {
	let myStr = str.split('&');
	let str1 = myStr[0];
	let part2 = myStr[1].split('=');
	let str2 = part2[1];
	console.log(str1);
	console.log(str2);
	for (let i = 0; i < str2.length; i++) {
		if (str1.indexOf(str2[i]) == -1) {
			return false;
		}
	}
	return true;
}

//console.log(StringScramble("cdore & str2 =coder"));
// Result:   true
//console.log(StringScramble("h3llko & str2= hello"));
// Result: false;
console.log(StringScramble('rkqodlw & str2=world'));
// Result: true;
