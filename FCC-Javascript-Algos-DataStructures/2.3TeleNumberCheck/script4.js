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

// ATTEMPT 13 - If I don't get it fixed tomorrow, I'm asking for help on forums
function telephoneCheck(str) {
    const case1 = /^\d{3}-\d{3}-\d{4}$/; // 555-555-5555
    const case2 = /^\(\d{3}\)\d{3}-\d{4}$/; // (555)555-5555
    const case3 = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/; // (555) 555-5555
    const case4 = /^\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 555 555 5555
    const case5 = /^\d{10}$/; // 5555555555
    const case6 = /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 1 555 55555555
    const case7 = /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/; // 1 (555)555-5555
    const case8 = /^1{1}\(\d{3}\)\d{3}-\d{4}$/; // 1(555)555-5555
    const case9 = /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/; // 1 555-555-5555
    const cases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];
    let caseIndex =0;
  
    while (caseIndex < cases.length){
      if (cases[caseIndex].test(str) === false){
        caseIndex +=1;
      }
  
      else{
        return true;
      }
    }
  
    return false;
  }


const form = document.querySelector('check-btn');

form.addEventListener('click', (event) => {
  event.preventDefault();

  const userInput = document.getElementById('user-input').value;

  if (userInput === '') {
    alert('Please provide a phone number.');
  } else {
    const resultsDiv = document.getElementById('results-div');

    const isValid = telephoneCheck(userInput);

    if (isValid) {
      resultsDiv.innerText = 'Valid US number: ' + userInput + '';
    } else {
      resultsDiv.innerText = 'Invalid US number: ' + userInput + '';
    }
  }
});

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});

function isValidPhoneNumber(phoneNumber) {
const phoneNumberRegex = /^(\d{3})-(\d{3})-(\d{4})$/;

return phoneNumberRegex.test(phoneNumber);
}