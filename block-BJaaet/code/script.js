let form = document.querySelector("form");

let list = document.querySelector("ul");

function handleSubmit(e) {
  e.preventDefault();
  // list.innerHTML = "";
  let name = form.elements.name.value;
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  h2.innerText = name;
  let span = document.createElement("span");
  span.innerText = "X";

  li.append(h2, span);
  list.append(li);
  span.addEventListener("click", function () {
    span.parentElement.style.display = "none";
  });
}

let cross = form.addEventListener("submit", handleSubmit);
