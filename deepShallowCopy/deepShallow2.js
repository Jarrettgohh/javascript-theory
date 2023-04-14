//
// Equality operator (===) only returns true if the objects reference the same object
//

// =================================
// SHALLOW COPY - Direct equal (=)
// DEEP COPY - JSON parse and stringify
// =================================

const obj1 = {
  test: "jarrett",
  test2: {
    nested: "hi",
  },
};

const obj2 = {
  test: "jarrett",
};

// ============================
// SHALLOW COPY
// ============================

const obj3 = obj1; // shallow copy - returns true for Object.is()

console.log(obj1 === obj2); // false
console.log(Object.is(obj1, obj2)); // false
console.log(Object.is(obj1, obj3)); // true
console.log(obj1 == obj3); // true

obj3.test =
  "this would change for the original obj1 too, as its a shallow copy";
obj3.test2.nested = "this nested value would change too for the original obj1";
console.log(obj1);

// ============================
// DEEP COPY
// ============================

const obj4 = JSON.parse(JSON.stringify(obj2)); // deep copy

obj4.test = "this will not change obj2, as its a deep copy";
console.log(obj2);

console.log(obj4 === obj2); // false
console.log(Object.is(obj4, obj2)); // false
