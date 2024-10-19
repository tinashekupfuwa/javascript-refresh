var names = ["Stan", "John", "Pam", "Blessing", "Samson"];

var number = 0;
var condition = true;

while (number <= 5) {
	console.log(number);
	number++;
}

var index = 0;
while (condition) {
	console.log("this means condition is true");
	condition = false;
}

while (index < names.length) {
	console.log("--------------------");
	console.log(names[index]);
	index++;
}
