const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
var result = document.getElementById("result");

function isPalindrome(text) {
  if (text === "") {
    return false;
  }
  
  const regex = /[^a-zA-Z0-9]/g;
  const cleanText = text.replace(regex, '').toLowerCase();
  return recursivePalindromeChecker(cleanText)
}

const recursivePalindromeChecker = (text) => {
  var textArray = text.split('');
  if (textArray.length == 1) {
    return true;
  } else if (textArray.length === 2 && textArray[0] === textArray[1]) {
    return true;
  } else if (textArray.length > 2 && textArray[0] === textArray[textArray.length - 1]) {
    textArray.shift();
    textArray.pop();
    var shortenedText = textArray.join('');
    return recursivePalindromeChecker(shortenedText) ? true : false;
  } else {
    return false;
  }
}

checkBtn.addEventListener("click", (e) => { 
  e.preventDefault();
  if (textInput.value === "") {
    alert("Please input a value!");
  } else if (isPalindrome(textInput.value)) {
    result.innerHTML = `
    <p>${textInput.value} is a palindrome.</p>
    `
  } else {
    result.innerHTML = `
    <p>${textInput.value} is not a palindrome.</p>
    `
  }
});
/*ATTEMPT 1:
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
  } 
*/
/*ATTEMPT 2:
function palindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters.
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is empty or has only one character.
  if (cleanedStr === '' || cleanedStr.length === 1) {
    return true;
  }

  // Compare the cleaned string to its reversed form.
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const textInput = document.getElementById('text-input');

  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    const value = textInput.value;
    const isPalindrome = palindrome(value);

    if (isPalindrome) {
      result.innertext = `${value} is a palindrome`;
    } else {
      result.innertext = `${value} is not a palindrome`;
    }
  }
}); */