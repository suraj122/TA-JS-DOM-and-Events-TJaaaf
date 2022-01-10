let userLayout = document.querySelector(".user-icons");
let computerLayout = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let userSelection = document.querySelector(".user-selection");
let computerSelection = document.querySelector(".computer-selection");

let dataSet = [
  {
    name: "rock",
    beates: "scissors",
  },
  {
    name: "paper",
    beates: "rock",
  },
  {
    name: "scissors",
    beates: "paper",
  },
];

let userSelected = {},
  computerSelected = {};

function generateRandomNum(max = 3) {
  return Math.floor(Math.random() * max);
}

function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerText = "It's a tie";
  } else if (user.beates === computer.name) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You Lost!";
  }
}

function updateSelection(user, computer) {
  userSelection.innerText = user.name;
  computerSelection.innerText = computer.name;
}

function createUserLayout() {
  userLayout.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);

    if (userSelected.name === icon.name) {
      li.classList.add("active");
    }

    li.addEventListener("click", function () {
      userSelected = icon;
      computerSelected = dataSet[generateRandomNum()];
      getWinner(userSelected, computerSelected);
      updateSelection(userSelected, computerSelected);
      createUserLayout();
      createComputerLayout();
    });
    userLayout.append(li);
  });
}

createUserLayout();

function createComputerLayout() {
  computerLayout.innerHTML = "";
  dataSet.forEach((icon) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;
    li.append(i);
    computerLayout.append(li);
    if (computerSelected.name === icon.name) {
      li.classList.add("active");
    }
  });
}

createComputerLayout();

reset.addEventListener("click", function () {
  (userSelected = {}), (computerSelected = {});
  createUserLayout(), createComputerLayout();
  result.innerText = "";
  userSelection.innerText = "";
  computerSelection.innerText = "";
});
