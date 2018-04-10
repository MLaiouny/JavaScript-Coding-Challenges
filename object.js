let obj = {a:3, b:2, d: 5, z: 7, L: 4};
for (let key in obj){
    //let value = obj[key];
    //console.log(key);
    //console.log(value);
    if (obj[key] == 7){
    	console.log(key);
    }
} 