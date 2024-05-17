// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

function capitalize(str) {
  const words = str.split(" "); // wil split the strong at every " " space and save it as an array
  const result = []; //empty array to store the new string, capitalize each word and push it into this array
  for (let word of words) {
    // for each word in words variable that was split at " " space,
    result.push(word[0].toUpperCase() + word.slice(1)); //will capitalize first letter, and then add the rest of the word after .slice will take[1] index
  }
  return result; //return the pushed capitalized letter + words
}

console.log(capitalize("this is Sean from coding money"));
