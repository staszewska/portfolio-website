let form = document.querySelector(".contact-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#contact-email");
let messageInput = document.querySelector("#contact-message");

function showErrorMessage(input, message) {
  let container = input.parentElement;

  let error = container.querySelector(".error-message");
  if (error) {
    container.removeChild(error);
  }
  if (message) {
    let error = document.createElement("div");
    error.classList.add("error-message");
    error.innerText = message;
    container.appendChild(error);
  }
}

function validateName() {
  value = nameInput.value;

  if (!value) {
    showErrorMessage(nameInput, "This field cannot be empty.");
    return false;
  }

  showErrorMessage(nameInput, null);
  return true;
}

function validateEmail() {
  let value = emailInput.value;

  if (!value) {
    showErrorMessage(emailInput, "Email is required field.");
    return false;
  }

  if (value.indexOf("@") === -1) {
    showErrorMessage(emailInput, "You must enter a valid email address.");
    return false;
  }

  if (value.indexOf(".") === -1) {
    showErrorMessage(emailInput, "You must enter a valid email address.");
    return false;
  }

  showErrorMessage(emailInput, null);
  return true;
}

function validateMessage() {
  let value = messageInput.value;

  if (value === "") {
    showErrorMessage(messageInput, "This field cannot be empty.");
    return false;
  }

  showErrorMessage(messageInput, null);
  return true;
}

emailInput.addEventListener("input", validateEmail);
nameInput.addEventListener("input", validateName);
messageInput.addEventListener("input", validateMessage);

function validateForm() {
  validateName() && validateEmail() && validateMessage();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    alert("Success!");
  }
});
