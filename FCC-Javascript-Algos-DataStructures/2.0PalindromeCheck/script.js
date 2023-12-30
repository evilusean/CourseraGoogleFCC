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
//TO DO: ADD event listener on click, check text input 
// return to where?
const form = document.querySelector('form');
  
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputValue = document.querySelector('.text-input').value;

  const result2 = palindrome(inputValue);

  const div = document.querySelector('result');

  if (result2) {
    div.innerHTML = 'The input is a palindrome!';
  } else {
    div.innerHTML = 'The input is not a palindrome!';
  }
});
