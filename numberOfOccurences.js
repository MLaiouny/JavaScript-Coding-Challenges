function Test(arr){
	let obj = {};
	
  for (let i = 0; i < arr.length; i++){
  	if (!obj[arr[i]]) {
    	obj[arr[i]] = 1;
    }
    else {
    	obj[arr[i]]++;
    }
  }
  console.log(obj);
}

Test([5,2,18,5,3,6,5,18,20]); // result: {2: 1, 3: 1, 5: 3, 6: 1, 18: 2, 20: 1}
