// Elementler üzerinde gezinme

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card")[0];
const todoLastChild = document.querySelector(".list-group-item:last-child");
const row2 = document.querySelector(".row");

let value;

// parentElement'den childElemente ulasma
value = todoList;
value = todoList.children[0];
value = todoList.children[1];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[3].textContent = "Değiştirildi";

value = Array.from(todoList.children);
value.forEach(function (s) {
  // console.log(s.textContent);
});

// children'den parentElemente ulasma
value = todo;  // <li class="list-group-item d-flex justify-content-between"> Todo Ekle </li>
let ul = todo.parentElement;  // <ul class="list-group"> </ul>
let cardBody = ul.parentElement; //<div class="card-body">…</div>
let cardElement = cardBody.parentElement; //<div class="card w-100 mt-3">…</div>flex
let row = cardElement.parentElement; //<div class="row">…</div>
let container = row.parentElement; //<div class="container">…</div>
let body = container.parentElement; //<body>…</body>
let html = body.parentElement; //<html>…</html>


// children'den childeren'e ulasma --> nextElementSibling, previousElementSibling, nextSibling, previousSibling
value = todo.nextElementSibling; // todo 2. elemanı
value = todo.nextElementSibling.nextElementSibling; // todo 3. elemanı
value = todo.nextElementSibling.nextElementSibling.nextElementSibling; // Değiştirildi elemanı
value = todo.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; // null
// Not: child elemanlar sirayla gezilirken ilk elemandan oncesi ve son elemandan sonrasi null döner.

//previousElementSibling
value = todoLastChild; // Değiştirildi elemanı
value = todoLastChild.previousElementSibling; // todo 3. elemanı



// example
value = row2.children[0].children[3].children[0].textContent = "Todo Listesi Başlığı Değişti"; 

let todo3 = row2.children[0].children[3].children[2].children[2];
todo3.textContent = " Todo 3 değiştirildi";
todo3.style.backgroundColor= "lightgrey";
todo3.style.color= "red";
    
    console.log(value);
