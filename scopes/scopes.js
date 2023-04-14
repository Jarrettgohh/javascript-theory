// ==========================
// BLOCK SCOPE
// ==========================

let x = "test";

{
  let b = "scope"; // variables declared in the block scope would not be accesible from outside the scope

  x = "value"; // value would be mutated within the block scope
}

console.log(x); // output: "value"
// console.log(b); // will throw error - variable not defined

let y = "test";

let c = "test1";
let cUpdated = "test1"; // this variable would be updated (value returned from the function would be assigned to this variable)

function scope(arg) {
  let a = "scope"; // variables declared in the function scope would not be accesible from outside the scope

  y = "value"; // value would be mutated within the function scope
  arg = "value"; // only the function scoped value would be mutated, but not the original value outside the function - need to use return statement

  return arg;
}
cUpdated = scope(c);

console.log(y); // output: "value"
console.log(c); // output: "test1"
console.log(cUpdated); // output: "value"
// console.log(a);// will throw error - variable not defined
