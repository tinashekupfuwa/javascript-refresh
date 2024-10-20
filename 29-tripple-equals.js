//triple equals - performing equality without type coercion.
//use triple equals when performing equality

//double equals
console.log("Type Coercion");
console.log(0 == false); //true
console.log(1 == false); //false
console.log("0" == false); //true
console.log("1" == false); //false
console.log("1" == 1); //true

//triple equals
console.log("Without Type Coercion");
console.log(0 === false); //false
console.log(1 === false); //false
console.log("0" === false); //false
console.log("1" === false); //false
console.log("1" === 1); //false
