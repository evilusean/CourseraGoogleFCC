/* Old Code-variable names conflict -can do same with less
function palindrome(str) {
    let strLowerCase = str.toLowerCase();
    let editedStr = strLowerCase.replace(/[^0-9a-z]/gi, ''); 
    let characters = editedStr.split("");
    let charactersReversed = characters.slice(0).reverse();
    let result = true;
  
    for (let i = 0; i < characters.length; i++){
      if (characters[i] != charactersReversed[i]){
        result = false;
      }
    }
  
    return result;
  } */
//TO DO: ADD event listener on click, check text input 
// return to where?
const form = document.querySelector('form');
  
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const textInput = document.getElementById('text-input');

  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    const value = textInput.value;
    const isPalindrome = palindrome(value);

    if (isPalindrome) {
      result.innerHTML = `<p>${value} is a palindrome</p>`;
    } else {
      result.innerHTML = `<p>${value} is not a palindrome</p>`;
    }
  }
});

function palindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters.
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the cleaned string is empty or has only one character.
  if (cleanedStr === "" || cleanedStr.length === 1) {
    return true;
  }

  // Compare the cleaned string to its reversed form.
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
