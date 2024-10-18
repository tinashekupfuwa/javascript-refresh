//An object is a collection of properties.

var person = {
	//key:value pairs
	firstName: "Joshua",
	age: 21,
	isFemale: true,
	balance: 134.56,
	dob: new Date(2021, 3, 12).toJSON(),
	address: {
		city: "Bulawayo",
		Postcode: "00263"
	}
};

console.log(person);
//Access individual properties
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);

//Accessing properties in nested objects
console.log(person.address.city);

//extracting Values and keys
console.log(Object.keys(person));
console.log(Object.values(person));

//To get a string representation of an object.
console.log(JSON.stringify(person));
