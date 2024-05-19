// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0

/* METHOD 1: Regex : Built in JS function called 'match', returns null if there are no matches, will return an array with all the matches 
function vowels(str) {
  const matches = str.match(/[aeiou]/gi); //g flag = won't stop at first match, i flag = case insensitivty, can be caps or lower
  return matches ? matches.length : 0; //if there are matches, return how many there are(.length) of array - will give us a number : or zero
}
*/

//METHOD 2: create an array with all vowels inside, check string against the array, if there is a match increment counter, return the counter
function vowels(str) {
  const vowelCheck = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowelCheck.includes(char)) count++;
    //arrays have a built in helper function called 'includes', if it is a vowel, else it will skip, then add +1 count increment
  }
  return count;
}
console.log(vowels("Coding Money"));
