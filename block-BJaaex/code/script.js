// Card data
const cardsArray = [
  {
    name: "blowfish",
    img: "img/blowfish.png",
  },
  {
    name: "butterfly",
    img: "img/butterfly.png",
  },
  {
    name: "cat",
    img: "img/cat.png",
  },
  {
    name: "cheetah",
    img: "img/cheetah.png",
  },
  {
    name: "crocodile",
    img: "img/crocodile.png",
  },
  {
    name: "dog",
    img: "img/dog.png",
  },
  {
    name: "dolphin",
    img: "img/dolphin.png",
  },
  {
    name: "giraffe",
    img: "img/giraffe.png",
  },
];

const gameGrid = cardsArray.concat(cardsArray);
let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = null;
let delay = 1200;

// Root Element
let rootElm = document.querySelector(".root");

gameGrid
  .sort(() => 0.5 - Math.random())
  .forEach((card) => {
    let li = document.createElement("li");
    let front = document.createElement("div");
    front.classList.add("front");
    let back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url('${card.img}')`;
    li.dataset.name = card.name;
    li.append(front, back);
    rootElm.append(li);
  });

const match = () => {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

rootElm.addEventListener("click", function (e) {
  let clicked = e.target;

  if (
    clicked.nodeName === "UL" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuess, delay);
      } else {
        setTimeout(resetGuess, delay);
      }
    }
    previousTarget = clicked;
  }
});

const resetGuess = () => {
  count = 0;
  firstGuess = "";
  secondGuess = "";
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};
