//ATTEMPT 11 Much Fun, Wow, 
/* I'm going to find a way to pass just this one stupid test, hopefully 
if I can get this right, instead of a cascade failure, I get successs
Or waste another 12 hours writing the same gd script 10 fcing times and make 0 progress

The Test:
When you click on the #check-btn element without entering a value into the
 #user-input element, an alert should appear with the text 
 Please provide a phone number.
 CHECK REGEX
 CHECK .innerhtml maybe try .innertext or create <p> 
 I don't understand how I'm not passing a single fcing test, even the easy one
 like 'raise an alert' if empty. It's not that hard. I don't understand.
 Even after rewriting this stupid fcking garbage 10- 11 gd times, wasting 12 hours
 soon to be 2 days, and made 0 progress-unbeleivable
 this isn't that hard, maybe the tester is broken.
*/
//ATTEMPT # 11 - WHY WONT IT WORK - 
function checkPhoneNumber(phoneNumber) {
  // Check if the phone number is in the correct format.
  if (!phoneNumber.match(/^(\d{3}-\d{3}-\d{4})|(\d{10})$/)) {
    return false;
  }

  // Check if the phone number is a valid US number.
  if (!phoneNumber.startsWith("1")) {
    return false;
  }

  // Check if the phone number is a valid length.
  if (phoneNumber.length !== 10) {
    return false;
  }

  // Check if the phone number contains any invalid characters.
  if (phoneNumber.includes("-") || phoneNumber.includes(" ")) {
    return false;
  }

  // The phone number is valid.
  return true;
}

function displayResults(isValid, phoneNumber) {
  if (isValid) {
    document.getElementById("results-div").innerText = `Valid US number: ${phoneNumber}`;
  } else {
    document.getElementById("results-div").innerText = `Invalid US number: ${phoneNumber}`;
  }
}

const input = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const checkButton = document.getElementById("check-btn");

// Add an event listener to the input field.
checkButton.addEventListener("click", () => {
  // Get the phone number from the input field.
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }
  const phoneNumber = input.value;

  // Check if the phone number is valid.
  const isValid = checkPhoneNumber(phoneNumber);

  // Display the results.
  displayResults(isValid, phoneNumber);
});

clearButton.addEventListener("click", () => {
  // Clear the input field.
  input.value = "";

  // Clear the results div.
  document.getElementById("results-div").innerHTML = "";
});

