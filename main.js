// get input from form
const message = document.getElementById('message');
const submit = document.getElementById('submit');

// get message display
const messageDisplay = document.getElementById('messageDisplay');

// add event listener to use the function passMessage when the submit button is selected
submit.addEventListener('click', function passMessage() {
  messageDisplay.innerHTML = message.value;

  document.getElementById("messageForm").reset();
});

// Execute a function when the user presses the "Enter" key on the keyboard
message.addEventListener('keypress', function(event){
   // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter"){
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the submit button element with a click
    submit.click();
  }
});
