/* ATTEMPT 1
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
*/
//ATTEMPT #2
/*const form = document.querySelector('check-btn');

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
*/
//literally the code from example project website, doesn't pass it's own tests. -.- 
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
