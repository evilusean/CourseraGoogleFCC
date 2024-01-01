//ATTEMPT 14 - DAY 2 - Hour 15
function telephoneCheck(str) {
  const num1 = /^\d{3}-\d{3}-\d{4}$/; // 555-555-5555
  const num2 = /^\(\d{3}\)\d{3}-\d{4}$/; // (555)555-5555
  const num3 = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/; // (555) 555-5555
  const num4 = /^\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 555 555 5555
  const num5 = /^\d{10}$/; // 5555555555
  const num6 = /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/; // 1 555 55555555
  const num7 = /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/; // 1 (555)555-5555
  const num8 = /^1{1}\(\d{3}\)\d{3}-\d{4}$/; // 1(555)555-5555
  const num9 = /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/; // 1 555-555-5555
  const nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9];
  let numIndex =0;
  while (numIndex < nums.length){
    if (nums[numIndex].test(str) === false){
      numIndex +=1;
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
    alert('Please provide a phone number');
  } else {
    const resultsDiv = document.getElementById('results-div');

    const isValid = telephoneCheck(userInput);

    if (isValid) {
      resultsDiv.innerText = 'Valid US number: ' + userInput;
    } else {
      resultsDiv.innerText = 'Invalid US number: ' + userInput;
    }
  }
});

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});