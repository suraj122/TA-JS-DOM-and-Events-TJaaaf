let container = document.querySelector(".container");

for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  box.className = "box";
  box.innerText = Math.floor(Math.random() * 500) + 1;
  container.append(box);
}

function generateRandomColor() {
  let hexNumber = [
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
    let randomNumber = Math.floor(Math.random() * 16);
    color = color + hexNumber[randomNumber];
  }
  return color;
}

// console.log(generateRandomColor());

function handleMousemove() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = generateRandomColor();
    box.innerText = Math.floor(Math.random() * 500) + 1;
  });
}

container.addEventListener("mousemove", handleMousemove);
