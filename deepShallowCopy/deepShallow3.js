//
// DEEP COPY - structuredClone()
//

const obj1 = {
  test: "value",
  test2: {
    deep: "copy",
  },
};

const obj2 = structuredClone(obj1);
obj2.test = "values";
obj2.test2.deep = "copies";

console.log(obj1);
console.log(obj2);
