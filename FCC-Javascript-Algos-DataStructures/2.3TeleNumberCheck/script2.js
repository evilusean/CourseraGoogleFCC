
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

