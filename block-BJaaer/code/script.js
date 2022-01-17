let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let modalInfo = document.querySelector(".modal-body");

let ul = document.querySelector("ul");

let userInfo = {};

function checkRadio(arr) {
  let bookGenere = "";
  arr.forEach((e, i) => {
    if (e.checked === true) {
      bookGenere = e.value;
    }
  });
  return bookGenere;
}

function handleSubmit(event) {
  event.preventDefault();
  userInfo.name = form.elements.text.value;
  userInfo.email = form.elements.email.value;
  userInfo.hobby = form.elements.hobby.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.rating.value;
  userInfo.bookGenere = checkRadio(form.elements.drone);
  userInfo.terms = form.elements.terms.checked;

  modal.classList.add("open");
  let close = document.querySelector(".close");
  close.addEventListener("click", function () {
    modal.classList.remove("open");
  });
  displayUserInfo(userInfo);
}

form.addEventListener("submit", handleSubmit);

function displayUserInfo(data = {}) {
  modalInfo.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerText = `Hello ${data.name}`;

  let email = document.createElement("p");
  email.innerText = `Emal: ${data.email}`;

  let hobby = document.createElement("p");
  hobby.innerText = `You Love: ${data.hobby}`;

  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;

  let rating = document.createElement("p");
  rating.innerText = `Rating: ${data.rating}`;

  let book = document.createElement("p");
  book.innerText = `Book Genere: ${data.bookGenere}`;

  let terms = document.createElement("p");
  terms.innerText =
    data.terms === true
      ? "You Accepted the terms"
      : "You did not accept the tems";

  modalInfo.append(h2, email, hobby, color, rating, book, terms);
}
