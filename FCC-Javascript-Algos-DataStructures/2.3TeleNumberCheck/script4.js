//ATTEMPT 12 - The 'fun' never ends.
/* THIS SHOULD NOT BE HARD: WHY CANT IT PASS A FCKING TEST
When you click on the #check-btn element without entering a value into the 
#user-input element, an alert should appear with the text Please provide a 
phone number.
*/

const checkButton = document.querySelector("#check-btn");
const input = document.querySelector("#user-input");
checkButton.addEventListener("click", () => {
    if (input.value == "" || null || undefined || !input.value || NaN) {
      alert("Please provide a phone number");
      return;
    }
});