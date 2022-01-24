let input = document.querySelector('input[type="text"]');
let root = document.querySelector("ul");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let filter = document.querySelectorAll(".filter-todo span");
let clear = document.querySelector(".clear");
let remainingTodo = document.querySelector(".remaining");

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
}

function handleActive() {
  let activeTodo = [];
  allTodos.forEach((todo) => {
    if (todo.isDone === false) {
      activeTodo.push(todo);
    }
  });
  createUi(activeTodo, root);
}

function handleCompleted() {
  let completed = [];
  allTodos.forEach((todo) => {
    if (todo.isDone === true) {
      completed.push(todo);
    }
  });
  createUi(completed, root);
}

function clearTodo() {
  let completed = [];
  allTodos.forEach((todo, i) => {
    if (todo.isDone === true) {
      allTodos.splice(i, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(allTodos));
  createUi(allTodos, root);
}

all.addEventListener("click", handleAll);
active.addEventListener("click", handleActive);
completed.addEventListener("click", handleCompleted);
clear.addEventListener("click", clearTodo);
