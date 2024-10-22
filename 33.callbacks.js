//Callbacks - these are functions passed as arguments to another functions

const greetUser = (username, callback) => {
	console.log(callback(username));
};

greetUser("james", (username) => {
	return `Hello ${username}`;
});

/**
 * Other ways callbacks are implemented
 */

const carModel = (brand, callback) => {
	if (callback) return callback(brand);
	else return `the brand is ${brand}`;
};

// const carType = carModel("mazda", "626", (brand, model) => {
// 	return `hello user of ${brand},${model}'`;
// });

console.log(
	carModel("mazda", (brand) => {
		return `from the callback :the brand is ${brand}`;
	})
);
