let form = document.querySelector("form");

let errorMessage = {};

function displayError(name) {
  form.elements[name].nextElementSibling.innerText = errorMessage[name];
  form.elements[name].parentElement.classList.add("error");
}
function displaySuccess(name) {
  form.elements[name].nextElementSibling.innerText = "";
  form.elements[name].parentElement.classList.remove("error");
  form.elements[name].parentElement.classList.add("success");
}

function handleSubmit(event) {
  event.preventDefault();

  let elements = event.target.elements;

  // Checking Username
  let userName = elements.username.value;
  if (userName.length < 4) {
    errorMessage.username = "Username can't be less than 4 characters";
    displayError("username");
  } else {
    displaySuccess("username");
  }

  // Checking Name
  let name = elements.name.value;
  if (!isNaN(name)) {
    errorMessage.name = "Name can't be numbers";
    displayError("name");
  } else {
    displaySuccess("name");
  }

  // Checking Email
  let email = elements.email.value;
  if (!email.includes("@")) {
    errorMessage.email = "Email must contain the symbol @";
    displayError("email");
  } else if (email.length < 6) {
    errorMessage.email = "Email must be at least 6 characters";
    displayError("email");
  } else {
    displaySuccess("email");
  }

  // Checking Phone
  let contact = elements.contact.value;
  if (isNaN(contact)) {
    errorMessage.contact = "Phone numbers can only be a number";
    displayError("contact");
  } else if (contact.length < 7) {
    errorMessage.contact = "Length of phone number can't be less than 7";
    displayError("contact");
  } else {
    displaySuccess("contact");
  }

  // Checking Password
  let password = elements.password.value;
  let confirm = elements.confirmation.value;
  if (password !== confirm) {
    errorMessage.password = "Password and confirm password must be same.";
    displayError("password");
  } else {
    displaySuccess("password");
  }
}

form.addEventListener("submit", handleSubmit);
