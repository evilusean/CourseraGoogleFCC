//ATTEMPT 12 - The 'fun' never ends.
input = document.querySelector("input");
checkButton.addEventListener("click", () => {
    // Get the phone number from the input field.
    if (input.value === "" || null || undefined) {
      alert("Please provide a phone number");
      return;
    }
});