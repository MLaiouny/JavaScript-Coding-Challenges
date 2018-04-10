function Person(first, last, age, eyecolor) {
	this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
myFather.nationality = "English";

myFather.name = function() {
	return this.firstName + " " + this.lastName;
};

Person.nationality = "English";

function Person(first, last, age, eyecolor) {
	this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

function Person(first, last, age, eyecolor) {
	this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() { return this.firstName + " " + this.lastName;};
}

Person.prototype.nationality = "English";
Person.prototype.name = function() {
	return this.firstName + " " + this.lastName;
};

