// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false

function palindrome(str) {
  const reversed = str.split("").reverse().join(""); //first we need to find the reverse of our input string, first .split turns it into an array,
  // .reverse inverts the array, and .join turns it back into a string
  if (str === reversed) {
    return true; // if input str, is equal to reversed(above variable) return true(it is a palindrome)
  }
  return false; //otherwise return false
}

console.log(palindrome("refer"));
