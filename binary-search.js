var arr = [1,2,4, 6, 1, 100, 0, 10000, 3];
arr.sort(function(a,b) {
	return (a-b);
});

console.log(arr);

function binarySearch(arr, v) {
	var mid = Math.floor(arr.length/2);
	console.log(arr[mid], v);
  var min = 0;
  var max = arr.length - 1;
  while (min <= max ){
  	if (arr[mid] === v) {
  		console.log('match was found, arr[mid], v);
  	}
    else if ( v < arr[mid]) {
    	max = mid -1;
      min = min;
      mid = min + max /2;
      if ( v === arr[mid]) {
      	console.log("a match was found!");
      }
     else  {
     	min = mid + 1;
      max = max;
      mid = min + max /2;
      if ( v === arr[mid]) {
      	console.log("a match was found");
      }
     }
      
      
    }
  }
 }