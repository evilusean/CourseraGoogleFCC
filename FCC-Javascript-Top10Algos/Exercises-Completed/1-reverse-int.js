// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* METHOD 1: Old way of doing it, with more moving parts. Below this function is one with new syntax for(let char of str) {}
function reverse(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
*/

// METHOD 2: new syntax for(let char of str) {} way of doing it :
// function reverse(str) {
//     let reversed = "";

//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }

// METHOD 3 :Built in Function way of doing it : Array.prototype.reverse()
//# can only be used on arrays, convert a string into an array do reversal and then convert it back into a string/integer
//The way you convert a string to an array is through the .split method
// function reverse(str) {
//   const strToArray = str.split(""); // if you don't pass anything, it will split each character into a new element in an array

//   strToArray.reverse(); // after creating an array we just called the reverse method

//   return strToArray.join(""); // to turn an array into a string, use the .join method
// }
// chaining allows us to write the three lines above into one line,

//METHOD 4: ONE LINER combined all three above lines into one line using the .split, .reverse, and .join method
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));
//METHOD 5: ONE LINER, SAME AS ABOVE BUT TO USE .SPLIT ON AN INTEGER YOU MUST FIRST CONVERT AN INTEGER INTO A STRING. with .toString() method
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join(""); // first we need to convert the integer into a string
  return reversed; // WILL RETURN
}

console.log(reverseInt(21963));
