function letterChanges(str) {
	var converted = str.replace(/[a-z]/gi, function(char) {
		return (char === 'z' || char === 'Z') ? 'a': String.fromCharCode(char.charCodeAt() + 1);
	});
	return converted;

	var capitalized = converted.replace(/alelilolu/gi, function(vowel) {
		return vowel.toUpperCase();
	});
	return capitalized;
}