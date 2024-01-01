//ATTEMPT # 10 - WHY WONT IT WORK - 
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
          document.getElementById("results-div").innerHTML = `Valid US number: ${phoneNumber}`;
        } else {
          document.getElementById("results-div").innerHTML = `Invalid US number: ${phoneNumber}`;
        }
      }

      const input = document.getElementById("user-input");
      const clearButton = document.getElementById("clear-button");
      const checkButton = document.getElementById("check-button");

// Add an event listener to the input field.
checkButton.addEventListener("click", () => {
  // Get the phone number from the input field.
  const phoneNumber = input.value;

  // Check if the phone number is valid.
  const isValid = checkPhoneNumber(phoneNumber);
  if (input.value === "") {
    alert("Please enter a valid phone number.");
  } else {

  // Display the results.
  displayResults(isValid, phoneNumber);
}
});

clearButton.addEventListener("click", () => {
    // Clear the input field.
    input.value = "";
  
    // Clear the results div.
    document.getElementById("results-div").innerHTML = "";
  });
