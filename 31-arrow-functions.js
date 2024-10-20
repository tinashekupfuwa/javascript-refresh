//Arrow Functions - a nicer way of defining functions in a nicer syntax.

const getBrand = (brand) => ({
	brand: brand,
	website: `www.${brand.toLowerCase()}.com`
}); //parenthesis required because we returning an object.

const newBrand = getBrand("nike");
console.log(JSON.stringify(newBrand, null, 1));

const add = (number1, number2) => number1 + number2;

const calculate = (sign, a, b) => {
	switch (sign) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "x":
			return a * b;
		case "/":
			return a / b;
		default:
		//throw error
	}
};

console.log(calculate("x", 3, 7));
