// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* Old way of doing it, with more moving parts. Below this function is one with new syntax for(let char of str) {}
function reverse(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
*/

// new syntax for(let char of str) {} way of doing it :
// function reverse(str) {
//     let reversed = "";

//     for (let char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }

// Built in Function way of doing it : Array.prototype.reverse() # can only be used on arrays, convert a string into an array and do the reverse.

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverse("hello"));

function reverseInt(n) {}
