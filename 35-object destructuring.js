//Object destructuring

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
const firstName = person.firstName;
const age = person.age;
const balance = person.balance;
*/

const { firstName, age, balance } = person; //Object destructuring has limited everything to 1 line.

//Destructuring nested objects

const {
	isFemale,
	dob,
	deleteMe,
	address: { city, city: town, postCode }
} = person;

console.log(firstName);
console.log(age);
console.log(balance);
console.log(city);
console.log(town);
