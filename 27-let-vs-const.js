//when do you use const or let?
/**
 * -Recommended - for everything you do in JS , always start with the const keyword.
 * -If you need to re-assign, you use the let keyword.
 * -the let keyword is good when it comes to loops.
 */

/*for (const i = 0; i < 10; i++) {
	//this will give an error because i, needs to be changed whenever the for loop runs,
	//the const makes it impossible to run the loop.
	//- let keyword is recommended for this.
	console.log(i);
}*/

for (let i = 0; i < 10; i++) {
	console.log(i);
}


