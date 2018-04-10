var fruits = ["Oranges", "Bananas", "Apples", "Kiwi", "Grapes"];
fruits.sort();
console.log(fruits);

var numbers = [23, 45, 9, 2, 37,5];
numbers.sort(function(a,b){
	return a-b;
});
console.log(numbers);

var newNumbers = [5, 23, 45, 55, 2, 7, 99, 15];
newNumbers.sort(function(a,b) {
	return (b-a);
});

console.log(newNumbers);
