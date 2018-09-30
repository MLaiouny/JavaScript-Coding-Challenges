/* jshint esversion: 6 */

function StockPicker(arr) {
	let minPrice = arr[0];
	let minIndex = 0;
	let sellPrice = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < minPrice) {
			minPrice = arr[i];
			minIndex = i;
		}
	}

	for (j = minIndex + 1; j < arr.length; j++) {
		if (arr[j] > sellPrice) {
			sellPrice = arr[j];
		}
	}

	//return sellPrice;
	return sellPrice - minPrice;
}

console.log(StockPicker([14, 20, 4, 12, 5, 11]));
