let getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

let container = document.querySelector(".container");

for (let i = 0; i < 500; i++) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  h3.innerText = getRandomNumber(500);
  div.append(h3);
  container.append(div);
}

let generateRandomColor = function () {
  let hexCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNum = getRandomNumber(16);
    color = color + hexCode[randomNum];
  }
  return color;
};

function handleEvents() {
  let box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    box.querySelector("h3").innerText = getRandomNumber(500);
  });
}

container.addEventListener("mousemove", handleEvents);
