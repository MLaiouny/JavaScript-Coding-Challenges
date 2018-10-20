// Challenge

// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter
// being passed which will be two times (each properly formatted with a colon and am or pm)
// separated by a hyphen and return the total number of minutes between the two times.
// The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the
// output should be 60. If str is 1:00pm-11:00am the output should be 1320.
// Sample Test Cases
// Input:"12:30pm-12:00am"

// Output:690

// Input:"1:23am-1:08am"

// Output:1425

/* jshint esversion: 6 */
function CountingMinutes(str) {
	let myArr = str.split('-');
	let part1 = myArr[0];
	let part2 = myArr[1];
	part1 = part1.split(':');
	part2 = part2.split(':');
	let pastHour = parseInt(part1[0]);
	let currentHour = parseInt(part2[0]);
	console.log(currentHour);
	console.log(part2);
	console.log(pastHour);
	let l1 = part1[1].length;
	let l2 = part2[1].length;
	console.log(l1);
	let pastMode = part1[1][l1 - 2] + part1[1][l1 - 1];
	let currentMode = part2[1][l2 - 2] + part2[1][l2 - 1];
	console.log(currentMode);
	console.log(pastMode);
	let h1 = part1[1];
	let myIndex = h1.length;
	let pastMinute = parseInt(h1.substr(0, myIndex - 2));
	if (pastMinute === '00') {
		pastMinute = 0;
	}
	let h2 = part2[1];
	let currentMinute = parseInt(h2.substr(0, h2.length - 2));
	if (currentMinute === '00') {
		currentMinute = 0;
	}
	let totalMinutes = 0;
	if (currentMode === pastMode && currentHour > pastHour) {
		totalMinutes = (currentHour - pastHour) * 60;
		totalMinutes = totalMinutes + (currentMinute - pastMinute);
	} else if (currentMode === pastMode && currentHour <= pastHour) {
		totalMinutes = (24 - (pastHour - currentHour)) * 60;
		totalMinutes = totalMinutes + (currentMinute - pastMinute);
	} else if (currentMode !== pastMode) {
		totalMinutes = (12 + (currentHour - pastHour)) * 60;
		totalMinutes = totalMinutes + (currentMinute - pastMinute);
	} else {
	}
	return totalMinutes;
}

//console.log(CountingMinutes("12:30pm-12:00am"));
// Result: 690
console.log(CountingMinutes('1:00pm-11:00am'));
