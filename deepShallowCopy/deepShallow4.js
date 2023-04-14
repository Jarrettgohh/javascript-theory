//
// The spread syntax does a deep copy of the top level data, and a reference for the nested elements (refer to `deepShallow1.js`) - hence, this causes a deep copy to be created for array elements
//

//
// SHALLOW COPY
//

const shallowArr = ["1", "2", "3"];

const shallowArr1 = shallowArr;
shallowArr.push("4"); // mutates original array
shallowArr1[0] = "test"; // mutates original array

console.log(shallowArr);
console.log(shallowArr1);
console.log(shallowArr === shallowArr1); // true - both variables references the same memory

//
// DEEP COPY
//
const deepArr = ["1", "2", "3"];

const deepArr1 = [...deepArr];
deepArr1.push("4"); // doesn't mutate original array
deepArr1[0] = "test"; // doesn't mutate original array

console.log(deepArr);
console.log(deepArr1);
console.log(deepArr === deepArr1); // false - both variables does not reference the same memory
