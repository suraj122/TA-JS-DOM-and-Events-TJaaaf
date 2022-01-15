let form = document.querySelector("form");

let errorMessage = "";

function checkNum(str) {
  return str.split("").some((e) => Number(e));
}

function doesContain(str) {
  return str.includes("@");
}

function checkContactNum(str) {
  return str.split("").every((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();

  let elements = event.target.elements;

  // Checking Username
  let userName = elements.username;
  if (userName.value == "") {
    errorMessage = "Can't be empty";
    userName.nextElementSibling.innerText = errorMessage;
  } else if (userName.value.length < 4) {
    errorMessage = "Can't be less than 4 Char";
    userName.nextElementSibling.innerText = errorMessage;
  } else {
    userName.nextElementSibling.innerText = "";
  }

  // Checking Name
  let name = elements.name;
  if (name.value == "") {
    errorMessage = "Can't be empty";
    name.nextElementSibling.innerText = errorMessage;
  } else if (checkNum(name.value)) {
    errorMessage = "Name can't be numbers";
    name.nextElementSibling.innerText = errorMessage;
  } else {
    name.nextElementSibling.innerText = "";
  }

  // Checking Email
  let email = elements.email;
  if (email.value == "") {
    errorMessage = "Can't be empty";
    email.nextElementSibling.innerText = errorMessage;
  } else if (email.value.length < 6) {
    errorMessage = "Email must be at least 6 characters";
    email.nextElementSibling.innerText = errorMessage;
  } else if (!doesContain(email.value)) {
    errorMessage = "Email must contain the symbol @";
    email.nextElementSibling.innerText = errorMessage;
  } else {
    email.nextElementSibling.innerText = "";
  }

  // Checking Phone
  let contact = elements.contact;
  if (contact.value == "") {
    errorMessage = "Can't be empty";
    contact.nextElementSibling.innerText = errorMessage;
  } else if (contact.value.length < 7) {
    errorMessage = "Length of phone number can't be less than 7";
    contact.nextElementSibling.innerText = errorMessage;
  } else if (!checkContactNum(contact.value)) {
    errorMessage = "Phone numbers can only be a number";
    contact.nextElementSibling.innerText = errorMessage;
  } else {
    contact.nextElementSibling.innerText = "";
  }

  // Checking Password
  let password = elements.password;
  let confirm = elements.confirmation;
  if (password.value == "") {
    errorMessage = "Can't be empty";
    password.nextElementSibling.innerText = errorMessage;
  } else if (password.value !== confirm.value) {
    errorMessage = "Password and confirm password must be same.";
    password.nextElementSibling.innerText = errorMessage;
  } else {
    password.nextElementSibling.innerText = "";
  }
}

form.addEventListener("submit", handleSubmit);
