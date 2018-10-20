// sort an array of numbers in an ascending order
/* jshint esversion: 6 */
function SortNums(arr) {
	let myArr = [];
	let min = arr[0];
	let minIndex = 0;
	while (arr.length > 0) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
				minIndex = i;
			}
		}
		myArr.push(min);
		arr.splice(minIndex, 1);
		min = arr[0];
		minIndex = 0;
	}

	return myArr;
}

// console.log(SortNums([25, 17, 4, 45, 12, 2, 66, 50]));
console.log(SortNums([50, 20, 30, 10, 40, 90, 80, 70, 60]));
