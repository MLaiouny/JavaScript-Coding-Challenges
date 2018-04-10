function SimpleAdding(num) {
	var sum = 0;
	// loop from 1 to num
	for (i = 0; i <= num; i++){
		sum = sum + i;
	}
	return sum;
}

// test
SimpleAdding(4);