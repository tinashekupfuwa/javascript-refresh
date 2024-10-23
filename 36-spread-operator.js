//Spread Operator on Objects

const Richard = {
	firstName: "Richard",
	age: 22,
	isFemale: true,
	balance: 100.45,
	dob: new Date(2000, 1, 18).toJSON(),
	toString: function () {
		return `Name: ${this.firstName} Age: ${this.age}`;
	},
	deleteMe: true
};

const address = {
	city: "Bulawayo",
	postCode: "00263"
};

const person = {
	...Richard,
	address: { ...address }
};

console.log(person);
