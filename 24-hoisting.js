//Hoisting
/**
 * var is the old way of declaring variables.
 * hoisting - the Interpreter declares all variables at the top.
 * the Interpreter ignores all scopes thats why the variable (i) has a value of 11.
 */

for (var i = 0; i <= 10; i++) {
	console.log(i);
}

console.log(`the value of i outside the block is: ${i}`);
