//If statement - allows us to execute a piece of code based on a condition.

var condition = true;

if (condition) {
	console.log("running.....");
}

var gender = "male";

if (gender == "female" || "FEMALE") {
	console.log("Good day Madam");
} else if (gender == "male") {
	console.log("good day sir");
} else {
	console.log("Hi, how are you?");
}
