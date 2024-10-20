//const - no re-assignment is allowed.
/**
 * using const, strings are immutable(can't be changed)
 */

const brand = "tencent";
const brandObject = {};
brandObject["brand"] = brand; //appending the brand variable into the brandObject object.

// brand = "bon marche";//this will give an error, as const variables cannot be re-assigned.
// brand = "fedex";
// brand = "OK";

console.log(brand);
console.log(brandObject);
delete brandObject.brand; //deleting a property from an object.
console.log(brandObject);
