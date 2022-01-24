let input = document.querySelector('input[type="text"]');
let root = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completedBtn = document.querySelector(".completed");
let clear = document.querySelector(".clear");
let remainingTodo = document.querySelector(".remaining");

let defaultBtn = all;

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function handleKey(event) {
  if (event.keyCode === 13) {
    let todo = {
      name: event.target.value,
      isDone: false,
    };
    allTodos.push(todo);
    createUi(allTodos, root);
    event.target.value = "";
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function createUi(data, rootElm) {
  rootElm.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement("li");

    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
    if (input.checked === true) {
      input.classList.add("done");
    } else {
      input.classList.remove("done");
    }
    input.setAttribute("data-id", index);
    input.addEventListener("input", handleChange);

    let h3 = document.createElement("h3");
    h3.innerText = todo.name;

    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);

    li.append(input, h3, span);
    root.append(li);
  });

  let checkComplete = data.some((todo) => {
    return todo.isDone === true;
  });

  if (checkComplete) {
    clear.innerText = "Clear Completed";
  } else {
    clear.innerText = "";
  }
  let count = 0;
  remainingTodo.innerText = count;
  data.forEach((todo) => {
    if (todo.isDone === false) {
      count = count + 1;
      remainingTodo.innerText = count;
    }
  });
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUi(allTodos, root);
}

function handleChange(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUi(allTodos, root);
}

input.addEventListener("keyup", handleKey);

createUi(allTodos, root);

// Filtering Todos

function handleAll() {
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUi(allTodos, root);
  updateBtn(all);
}

function handleActive() {
  let activeTodo = allTodos.filter((todo) => !todo.isDone);
  createUi(activeTodo, root);
  updateBtn(active);
}

function handleCompleted() {
  let completed = allTodos.filter((todo) => todo.isDone);
  createUi(completed, root);
  updateBtn(completedBtn);
}

function clearTodo() {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUi(allTodos, root);
}

function updateBtn(btn) {
  all.classList.remove("active-btn");
  active.classList.remove("active-btn");
  completedBtn.classList.remove("active-btn");
  defaultBtn = btn;
  defaultBtn.classList.add("active-btn");
}

updateBtn(all);

all.addEventListener("click", handleAll);
active.addEventListener("click", handleActive);
completedBtn.addEventListener("click", handleCompleted);
clear.addEventListener("click", clearTodo);
