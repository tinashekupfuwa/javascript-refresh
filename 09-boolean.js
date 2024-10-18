//Boolean - represent true of false
console.log(`-----------------------`);
var isAdult = true;

console.log(isAdult);
//booleans come in handy when dealing with conditional logic.

if (isAdult) {
	console.log("its an adult");
} else {
	console.log("its not an adult");
}

//we can use the nit(!)sign to reverse a boolean
console.log(`-----------------------`);
if (!isAdult) {
	//"!isAdult" refers to the boolean not being an adult as we have use the not sign.
	console.log("not an adult");
} else {
	console.log("its an adult");
}

console.log(`-----------------------`);
console.log(!true);
console.log(!false);
