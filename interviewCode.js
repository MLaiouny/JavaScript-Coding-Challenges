function myFunction(string) {
	
	var myResult = "";

	for(i = 0; i <string.length; i++) {
		if (myResult.indexOf(string[i]) == -1) {
			myResult += string[i];
		}
	}


	return myResult;
}

console.log(myFunction("tree traversal"));