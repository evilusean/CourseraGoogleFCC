// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* METHOD 1: Build a character map for stringA, then build character map for stringB, then compare the maps to see if they are equal
function charMap(str) {
  const charmap = {}; //start by creating an empty object for storing each character:count key:value pair
  str = str.toLowerCase().replace(/[\W]/g, ""); //to remove all capital letters, and to remove all punctuation use a regex
  // REGEX : '/[\W]/g CHARACTER SET: BIG 'W' WILL MATCH ALL CHARACTERS THAT ARE NOT A WORD
  for (let char of str) {
    // will go through each character in the string, and add it if not there, and ++ add one if it exists already
    charmap[char] = ++charmap[char] || 1;
  }
  return charmap;
}
// will check that the length of each charmap is the same, then check that the key:value pairs are the same, if both tests pass, return true
function anagrams(stringA, stringB) {
  const charmapA = charMap(stringA);
  const charmapB = charMap(stringB);
  if (Object.keys(charmapA).length !== Object.keys(charmapB).length)
    return false;
  for (let key in charmapA) {
    if (charmapA[key] !== charmapB[key]) return false;
  }
  return true;
}
*/
//METHOD 2:

console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
