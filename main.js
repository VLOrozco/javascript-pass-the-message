// get input from form
const message = document.getElementById('message');
const submit = document.getElementById('submit');

// get message display
const messageDisplay = document.getElementById('messageDisplay');

// add event listener to use the function passMessage when the submit button is selected
submit.addEventListener('click', passMessage);

function passMessage() {
  messageDisplay.innerHTML = message.value;

  document.getElementById("messageForm").reset();
}
