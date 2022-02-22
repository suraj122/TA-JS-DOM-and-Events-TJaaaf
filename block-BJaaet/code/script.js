let input = document.querySelector("input[type=text]");

let movieList = document.querySelector("ul");

let allMovies = [
  { name: "Inception", watched: false },
  { name: "Forest Gump", watched: false },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createMovieUI();
  }
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  if (allMovies[id].watched === true) {
    event.target.nextElementSibling.classList.add("watched");
  } else {
    event.target.nextElementSibling.classList.remove("watched");
  }
}

function createMovieUI() {
  movieList.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener("change", handleChange);

    let label = document.createElement("label");
    label.innerText = movie.name;
    label.for = i;
    let span = document.createElement("span");
    span.setAttribute("data-id", i);
    span.innerText = "X";
    span.addEventListener("click", deleteMovie);

    li.append(input, label, span);
    movieList.append(li);
  });
}

createMovieUI();
