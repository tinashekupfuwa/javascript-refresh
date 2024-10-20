//Let

/**
 * To solve hoisting we declare our variables using 'let' instead of var.
 */

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

console.log(`the value of i outside the block is: ${i}`); //this line will give an error, saying "the variable i is not declared, because scoping is at work."
