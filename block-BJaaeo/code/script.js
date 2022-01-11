let display = document.querySelector(".display");
let allBtns = document.querySelectorAll("button");

let initital = 0;
display.innerText = initital;

function handleClick(e) {
  if (e.target.classList.contains("clear")) {
    return (display.innerText = initital);
  } else if (e.target.classList.contains("eval")) {
    return (display.innerText = eval(display.innerText));
  }
  if (display.innerText === "0") {
    display.innerText = e.target.innerText;
  } else {
    display.innerText += e.target.innerText;
  }
}

allBtns.forEach((btn) => btn.addEventListener("click", handleClick));
