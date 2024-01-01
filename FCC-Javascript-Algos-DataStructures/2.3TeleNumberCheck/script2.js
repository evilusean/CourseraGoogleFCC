


const form = document.querySelector('check-btn');

form.addEventListener('click', (event) => {
  event.preventDefault();

  const userInput = document.getElementById('user-input').value;

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
    const isValid = telephoneCheck(userInput);

    if (isValid) {
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
      } else {
        resultsDiv.innerText = 'Invalid US number: ' + userInput + '';
      }
    }
  });

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});

