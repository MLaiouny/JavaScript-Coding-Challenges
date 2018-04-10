	// Challenge
	// Using the JavaScript language, have the function ClosestEnemyII(strArr) read the matrix of numbers 
	// stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. 
	// Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, 
	// or up you must move to reach an enemy which is represented by a 2. 
	// You are able to wrap around one side of the matrix to the other as well. 
	// For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following 

function ClosestEnemyII(strArr) {
	//step one - return 0 if there is no 2 in the array
	let twosies = strArr.filter(val => {
		return val.includes("2");
	});
	if (!twosies.length) {
		return 0;
	}
	//step two - get the coordinates of the 1 (targetX, targetY)
	targetY = strArr.findIndex(val => {
		return val.includes('1');
	});
	targetX = strArr[targetY].search(/1/);
	//step three find the smallest path to a 2
	let res = strArr.length * strArr[0].length;

	for (let row = 0, len = strArr[0].length; row < len; row++) {
		for (col = 0, height = strArr.length; col < height; col++) {
			if (strArr[row][col] === '2') {
				xShift = rowDist(targetX, col, len);
				yShift = rowDist(targetY, row, height);
				res = Math.min(res, xShift + yShift);
			}
		}
	}
	return res;

}