//ATTEMPT 12 - The 'fun' never ends.
/* THIS SHOULD NOT BE HARD: WHY CANT IT PASS A FCKING TEST
When you click on the #check-btn element without entering a value into the 
#user-input element, an alert should appear with the text Please provide a 
phone number.
*/

const checkButton = document.querySelector("#check-btn");
const input = document.querySelector("input");
checkButton.addEventListener("click", () => {
    // Get the phone number from the input field.
    console.log(input.value);
    if (input.value == "" || null || undefined) {
      alert("Please provide a phone number");
      return;
    }
});