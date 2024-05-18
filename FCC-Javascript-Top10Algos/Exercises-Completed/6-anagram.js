// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// METHOD 1: Build a character map for stringA, then build character map for stringB, then compare the maps to see if they are equal
function anagrams(stringA, stringB) {
  const charmapA = {}; //start by creating an empty object for storing each character:count key:value pair
  stringA = stringA.toLowerCase().replace(/[\W]/g, ""); //to remove all capital letters, and to remove all punctuation use a regex
  // REGEX : '/[\W]/g CHARACTER SET: BIG 'W' WILL MATCH ALL CHARACTERS THAT ARE NOT A WORD
  return stringA;
}

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
