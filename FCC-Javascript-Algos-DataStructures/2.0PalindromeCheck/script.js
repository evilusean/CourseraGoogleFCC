
const form = document.querySelector('form');
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const value = textInput.value;
  const isPalindrome = palindrome(value);

  if (isPalindrome) {
    result.innerHTML = `${value} is a palindrome`;
  } else {
    result.innerHTML = `${value} is not a palindrome`;
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
