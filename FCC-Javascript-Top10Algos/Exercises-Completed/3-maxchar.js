// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// METHOD 1: WILL NOT SORT THE HIGHEST USE CHAR Will go through each character in the string and map it to the character Map
// function maxChar(str) {
//   const charMap = {}; //create an empty object to hold all the characters we loop through
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char] = charMap[char] + 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// }

//METHOD 2 :Object.entries(charMap) Will sort through the object we created and turn it into an array with key:value pairs, so we can find the maxChar
/* CODE WORKS, WE ARE DOING A NEW WAY TO OPTIMIZE
function maxChar(str) {
  const charMap = {}; //create an empty object to hold all the characters we loop through
  let max = 0; // to find the maxCharacter(character used the most) we need to have a variable that keeps track of it
  let maxChar = ""; // same as above but for the key, instead of the count

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  for (const [key, value] of Object.entries(charMap)) {
    //destructure [key, value] from the object, and converts into an array
    //will convert each key:value letter:count in the charMap object into an array, this will loop through each key:value pair in the array
    if (value > max) {
      //if the value of the current key is greater than the current max,
      max = value; //set new max is current value count
      maxChar = key; //set new maxChar as the current key
    }
  }
  return maxChar;
}
*/

//METHOD 3: OPTIMIZED for(let key in charMap): Nicer, cleaner code
//When you want to loop through an array of strings use 'of' / when you
function maxChar(str) {
  const charMap = {}; //create an empty object to hold all the characters we loop through
  let max = 0; // to find the maxCharacter(character used the most) we need to have a variable that keeps track of it
  let maxChar = ""; // same as above but for the key, instead of the count

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
