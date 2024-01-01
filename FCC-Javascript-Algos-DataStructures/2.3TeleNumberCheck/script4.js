//ATTEMPT 12 - The 'fun' never ends.
/* THIS SHOULD NOT BE HARD: WHY CANT IT PASS A FCKING TEST
When you click on the #check-btn element without entering a value into the 
#user-input element, an alert should appear with the text Please provide a 
phone number.
*/

const checkButton = document.getElementById("check-btn");
const input = document.getElementById("user-input");
checkButton.addEventListener("click", () => {
    if (input.value === "" || null || undefined || !input.value) {
      alert("Please provide a phone number");
      return;
    }
});