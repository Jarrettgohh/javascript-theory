// =================================
// SHALLOW COPY - Spread syntax [...] {...}
// DEEP COPY - JSON parse and stringify
// =================================

//
// -> For the shallow spread syntax copy, it creates a deep copy of the top level elements and a shallow copy (reference) of the nested elements
// -> Essentially, the top level elements would be copied, while the nested elements which are referenced would point to the address in memory and thus can be mutated by other variables that references/points to that address too
// -> The spread syntax is different from the direct equal sign assignment (=), as the top level elements for that (= operator)would be referenced, instead of copied

const shallowObj1 = {
  value1: "1",
  value2: {
    value3: "2",
  },
};

const shallowObj2 = { ...shallowObj1 }; // spread syntax copy

shallowObj2.value1 = "bye"; // the top level element would not be mutated in the original object
shallowObj2.value2.value3 = "hello"; // the nested element of the original object would be mutated

console.log(shallowObj1);
console.log(shallowObj2);

//
// >> For the deep copy, the whole object would be copied, and none would be referenced
//

const deepObj1 = {
  value1: "1",
  value2: {
    value3: "2",
  },
};

const deepObj2 = JSON.parse(JSON.stringify(deepObj1)); // deep copy

deepObj2.value1 = "bye"; // would not mutate the original copy of the object
deepObj2.value2.value3 = "hello"; // would not mutate the original copy of the object

console.log(deepObj1);
console.log(deepObj2);
