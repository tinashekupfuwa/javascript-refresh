//Objects - collection of key value pairs.

const person = {
	firstName: "Tracey",
	age: 22,
	isFemale: true,
	balance: 100.45,
	dob: new Date(2000, 1, 18).toJSON(),
	address: {
		city: "Bulawayo",
		postCode: "00263"
	},
	toString: function () {
		return `Name: ${this.firstName} Age: ${this.age}`;
	},
	deleteMe: true
};

/**
 * Adding a property an object
 * person.lastName = "Macie";
 */

person["lastName"] = "Macie"; //Same thing as the commented code above

/**
 * Deleting a property from an object
 * delete person.deleteMe;
 */
delete person["deleteMe"]; //same thing as the code above

//looping in an object
/** 
for (const p in person) {
	//returns properties(keys)
	console.log(p);
}
*/

for (const p in person) {
	//returns values
	console.log(JSON.stringify(person[p]));
}

console.log(Object.keys(person));
console.log(Object.values(person));

// console.log(JSON.stringify(person, null, 1));

// console.log(person.toString());

// console.log(JSON.stringify(person, null, 1));
