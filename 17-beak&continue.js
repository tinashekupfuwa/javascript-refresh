//break and continue keywords.
//break and continue keyword can only be used in loops

Break;
for (var index = 0; index <= 10; index++) {
	console.log(index);
	if (index == 5) break;
}

//Continue
for (var index = 0; index <= 10; index++) {
	if (index < 5) continue;
	console.log(index);
}
