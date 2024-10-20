/**
 * Functions - a set of statements that perform a task
 * - a function can optionally take inputs
 * - a function can optionally return output
 * - parameters are what a function accepts.
 * - arguments are what a function receives.
 */

function getBrand() {
	console.log("tabletop");
}

getBrand(); // invoking a function

function studentName(personName) {
	console.log(personName);
}

studentName("Prosper");

function getCar(brand) {
	return {
		brand: brand,
		website: `www.${brand}.com`
	};
}

const brandResult = getCar("mazda");
console.log(brandResult);
console.log(JSON.stringify(brandResult, null, 1));
