// tum secimleri secme

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
todos = [];

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoad);
  secondCardBody.addEventListener("click", removeTodoToUI);
  clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
  const todoListesi = document.querySelectorAll(".list-group-item");
  if (todoListesi.length > 0) {
    // UI silme
    todoListesi.forEach(function (todo) {
      todo.remove();
    });
    // storage silme
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showAlert("success", "Tum liste silindi...");
  } else {
    showAlert("danger", "Hiç todo yok, silme işlemi gerçekleştirilemedi !");
  }
}

function pageLoad() {
  checkTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function removeTodoToUI(e) {
  if (e.target.className === "fa fa-remove") {
    // UI silme
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    // storage silme
    removeTodoToStorage(todo.textContent);
    showAlert("danger", "Todo silindi...");
  }
}

function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText === "") {
    showAlert("warning", "Lütfen bir todo giriniz !");
  } else {
    // arayuze ekleme
    addTodoToUI(inputText);
    //bilgilendirme ekleme
    showAlert("success", "Todo eklendi...");
    // storage ekleme
    addTodoToStorage(inputText);
  }

  //yonlendirmeyi engelleme
  e.preventDefault();
}

function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addTodoToStorage(newTodo) {
  checkTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function showAlert(type, message) {
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  // div.className = "alert alert-"+type;

  div.textContent = message;
  firstCardBody.appendChild(div);
  setTimeout(function () {
    // zamanlama islemi
    div.remove();
  }, 2750); // 2 saniye saonra
}

function removeTodoToStorage(removeTodo) {
  checkTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (removeTodo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
