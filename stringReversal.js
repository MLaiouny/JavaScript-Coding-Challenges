// Solution # 1
function reverseString(str) {
	return str
		.split('')
		.reverse()
		.strArr.join('');
	
}

// Solution # 2:
function reverseString(str) {
	let revString = '';
	for(let i = str.length - 1; i >=0; i--) {
		revString = revString + str[i];
	}
	return revString;
}

// Solution # 3
function reverseString(str) {
	let revString = '';
	for(let i = 0 ; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}
	return revString;
}

// Solution # 4
function reverseString(str) {
	let revString = '';
	for(let char of str) {
		revString = char + revString;
	}
	return revString;
}

// Solution # 5
function reverseStrings(str) {
	let revString = '';
	str.split('').forEach(function(char){
		revString = char + revString;
	});
	return revString;
}

// Solution # 6 
// Same as # 5 except it has the new E6 Syntax it uses a higher 
// order function method
function reverseStrings(str) {
	let revString = '';
	str.split('').forEach(char => revString = char + revString);
	return revString;
}

// Solution # 7
function reverseString(str) {
	return str.split('').reduce(function(revString, char){
		return char + revString
	}, '');
}

// Solution # 8
// Same as # 7 but using the new E6 Fat arrow syntax
function reverseString(str) {
	return str.split('').reduce((revString, char) => char + revString , '');
}








