function FirstFactorial(num) {
	
	var factorial = 1;
	if ( num === 0) {
		return 1;
	}

	while (num > 0) {
		factorial = factorial * num * FirstFactorial(num - 1);
	
	}
	return factorial;
}

FirstFactorial(4);