//
// Equality operator (===) only returns true if the objects reference the same object
//

const obj1 = {
  test: "jarrett",
};

const obj2 = {
  test: "jarrett",
};

const obj3 = obj1; // shallow copy - returns true for Object.is()

console.log(obj1 === obj2); // false
console.log(Object.is(obj1, obj2)); // false
console.log(Object.is(obj1, obj3)); // true
console.log(obj1 == obj3); // true

obj3.test = "this will change obj1 too, as its a shallow copy";
console.log(obj1);

const obj4 = JSON.parse(JSON.stringify(obj2)); // single layer deep copy

obj4.test = "this will not change obj2, as its a deep copy";
console.log(obj2);

console.log(obj4 === obj2); // false
console.log(Object.is(obj4, obj2)); // false
