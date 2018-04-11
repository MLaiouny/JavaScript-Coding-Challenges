// This Challenge requires you to capitalize the first letter of each word.
// to do this, we'll create an array of words, then loop through each word and 
// capitalize the first letter, and then combine these words back into one string.
// Below is some simple code to accomplish this:

// Solution # 1:
function CapitalizeLetters(str) {
	// split the string into an array
	var words = str.split(" ");
	//we split the word into two parts and then combine the parts
	// the first part is the first letter which we capitalize and the
	// second part is the rest of the string
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
	}

	// return the array of words joined into a string
	return words.join( " ");
}

// Solution # 2:
// we are gonna use a higher order function called Map
function CapitalizeLetters(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(function(word){
			return word[0].toUpperCase + word.substr(1);
		})
		.join(' ');
}

// Same solution using E6 Syntax
// Solution # 2:
// we are gonna use a higher order function called Map
function CapitalizeLetters(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(word => word[0].toUpperCase + word.substr(1)
		)
		.join(' ');
}

// Solution # 3
// Using regular expressions
return str.replace(/\b[a-z]/gi, function(char){
	return char.toUpperCase();
});

// Call Function
const output = CapitalizeLetters('i love javascript');
console.log(output);