const str = "loop blub";

//
// Test with regex.test(str)
//

search = "lo"; // true
search = "loo"; // true
search = "loop b"; // true
search = "blu"; // true

const regex = new RegExp(`(\s?${search}\s?|^${search})`, "i");
const match = search === "" ? false : regex.test(str);

console.log(match);
