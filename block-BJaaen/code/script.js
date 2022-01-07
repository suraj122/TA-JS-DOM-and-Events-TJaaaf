let userEnd = document.querySelector(".user-end");
let userSelection = document.querySelector(".user-selection");
let machineSelection = document.querySelector(".machine-selection");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let userCount = document.querySelector(".user-count");
let machineCount = document.querySelector(".machine-count");

let machineItem = document.querySelectorAll(".machine-end i");

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

let userCounter = 0;
let machineCounter = 0;

function handleEvent(e) {
  let userName = e.target.dataset.name;
  userSelection.innerText = userName;
  let machineName = machineItem[getRandomNum(3)].dataset.name;
  machineSelection.innerText = machineName;
  if (userName === "Scissor" && machineName === "Paper") {
    result.innerText = "You Won!";
    userCounter = userCounter + 1;
    userCount.innerText = userCounter;
  } else if (userName === "Paper" && machineName === "Rock") {
    result.innerText = "You Won!";
    userCounter = userCounter + 1;
    userCount.innerText = userCounter;
  } else if (userName === "Rock" && machineName === "Scissor") {
    result.innerText = "You Won!";
    userCounter = userCounter + 1;
    userCount.innerText = userCounter;
  } else if (userName === "Scissor" && machineName === "Scissor") {
    result.innerText = "It's a tie!";
  } else if (userName === "Paper" && machineName === "Paper") {
    result.innerText = "It's a tie!";
  } else if (userName === "Rock" && machineName === "Rock") {
    result.innerText = "It's a tie!";
  } else {
    result.innerText = "You lost!";
    machineCounter = machineCounter + 1;
    machineCount.innerText = machineCounter;
  }
}

userEnd.addEventListener("click", handleEvent);
reset.addEventListener("click", function (e) {
  userSelection.innerText = "";
  machineSelection.innerText = "";
  result.innerText = "";
  userCount.innerText = "0";
  machineCount.innerText = "0";
});
// console.log(machineItem);
