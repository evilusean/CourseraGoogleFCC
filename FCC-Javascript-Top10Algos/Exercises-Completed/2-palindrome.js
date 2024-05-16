// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.
// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

// function palindrome(str) {
//   const reversed = str.split("").reverse().join(""); //first we need to find the reverse of our input string, first .split turns it into an array,
//   // .reverse inverts the array, and .join turns it back into a string
//   if (str === reversed) {
//     return true; // if input str, is equal to reversed(above variable) return true(it is a palindrome)
//   }
//   return false; //otherwise return false
// }

//Turn all of the above code into a one liner
function palindrome(str) {
  const reversed = str.split("").reverse().join(""); //first we need to find the reverse of our input string, first .split turns it into an array,
  // .reverse inverts the array, and .join turns it back into a string
  return str === reversed;
}

console.log(palindrome("refer"));
console.log(palindrome("Phat"));

/* FUTURE SEAN PROBLEMS: This problem can be solved in 2 other MEthods :
2 Pointers Technique = https://www.geeksforgeeks.org/two-pointers-technique/ 
JS built in Method 'Every' =
 https://www.w3schools.com/jsref/jsref_every.asp#:~:text=The%20every()%20method%20returns,the%20function%20for%20empty%20elements.
*/
