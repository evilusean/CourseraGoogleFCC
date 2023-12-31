
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

const form = document.querySelector('form');

form.addEventListener('click', (event) => {
  event.preventDefault();

  const textInput = document.getElementById('text-input');

  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    const value = textInput.value;
    const isPalindrome = palindrome(value);

    if (isPalindrome) {
      result.innerText = `<h1>${value} is a palindrome</h1>`;
    } else {
      result.innerText = `<h1>${value} is not a palindrome</h1>`;
    }
  }
});

/* function palindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters.
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');


  if (cleanedStr === '' ) {
    alert('Please input a value');
  }

  // Compare the cleaned string to its reversed form.
  return cleanedStr === cleanedStr.split("").reverse().join("");
} */
