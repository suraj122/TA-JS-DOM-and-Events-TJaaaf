let houses = [];
got.houses.forEach((house) => {
  houses.push(house.name);
});

// Creating NavBar and Sorting according the house name

let navBar = document.querySelector(".navbar");
houses.forEach((house, i) => {
  let li = document.createElement("li");
  li.innerText = house;
  li.setAttribute("data-id", i);
  navBar.append(li);
  li.addEventListener("click", handleHouseData);
});

// Displaying People Card

let allPeople = document.querySelector(".got-people");
let peopleOfGot = [];
got.houses.forEach((house) => {
  peopleOfGot.push(house.people);
});

function createUi(data, root) {
  root.innerHTML = "";
  data.flat(Infinity).forEach((people) => {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.src = people.image;

    let h2 = document.createElement("h2");
    h2.innerText = people.name;

    let p = document.createElement("p");
    p.innerText = people.description;

    let button = document.createElement("a");
    button.href = people.wikiLink;
    button.innerText = "Know More!";
    button.target = "_blank";

    li.append(img, h2, p, button);
    root.append(li);
  });
}

// Sorting People byHouse

function handleHouseData(event) {
  let id = event.target.dataset.id;
  createUi(got.houses[id].people, allPeople);
}

// Impleting SearchBar

let input = document.querySelector("input");

function handleKey(event) {
  let value = event.target.value;
  let searchArr = [];
  peopleOfGot.flat(Infinity).forEach((people) => {
    if (people.name.toLowerCase().includes(value.toLowerCase())) {
      searchArr.push(people);
    }
  });
  createUi(searchArr, allPeople);
}

input.addEventListener("keyup", handleKey);

createUi(peopleOfGot, allPeople);
