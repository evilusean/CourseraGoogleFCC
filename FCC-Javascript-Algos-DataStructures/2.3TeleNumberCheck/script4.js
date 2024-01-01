//ATTEMPT 12 - The 'fun' never ends.
/* THIS SHOULD NOT BE HARD: WHY CANT IT PASS A FCKING TEST
When you click on the #check-btn element without entering a value into the 
#user-input element, an alert should appear with the text Please provide a 
phone number.
*/

const checkBS = document.querySelector("#check-btn");
const inputGarbage = document.querySelector("#user-input");
checkBS.addEventListener("click", () => {
    if (inputGarbage.value == "" || null || undefined || !inputGarbage.value || NaN) {
      alert("Please provide a phone number");
    }
});