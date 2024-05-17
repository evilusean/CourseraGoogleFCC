// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

/*METHOD 1: Create an array, index [0] .toUpperCase, + .slice[1], .join(" ")
function capitalize(str) {
  const words = str.split(" "); // wil split the strong at every " " space and save it as an array
  const result = []; //empty array to store the new string, capitalize each word and push it into this array
  for (let word of words) {
    // for each word in words variable that was split at " " space,
    result.push(word[0].toUpperCase() + word.slice(1)); //will capitalize first letter, and then add the rest of the word after .slice will take[1] index
  }
  return result.join(" "); //return the pushed capitalized letter + words
}
*/
//METHOD 2: Map
function capitalize(str) {
  const words = str.split(" "); // wil split the strong at every " " space and save it as an array
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("this is Sean from coding money"));
