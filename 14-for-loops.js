//Loops - allows you to execute a piece of code over and over again until a condition is reached.

// - Printing numbers from 0-10

//counting to 10 loop

/*for (var i = 0; i <= 10; i++) {
	console.log(i);
}
  */

var names = ["Stan", "John", "Pam", "Blessing", "Samson"];

console.log("for i  ---------------------------------");
//looping through an array using for loop.
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

console.log();
console.log("for Of ---------------------------------");
//looping trough an array using a for of loop.
for (const name of names) {
	console.log(name);
}

console.log();
console.log("forEach ---------------------------------");
//looping through an array using a for each loop.
names.forEach(function (name) {
	console.log(name);
});
