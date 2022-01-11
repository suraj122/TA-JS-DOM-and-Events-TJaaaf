let allBox = document.querySelectorAll(".category1 .box");
let allBox2 = document.querySelector(".category2");

allBox.forEach((box, i) => {
  box.addEventListener("click", function () {
    box.innerText = i + 1;
    setTimeout(function () {
      box.innerText = "";
    }, 5000);
  });
});

allBox2.addEventListener("click", function (event) {
  event.target.innerText = event.target.dataset.text;
  setTimeout(function () {
    event.target.innerText = "";
  }, 5000);
});
