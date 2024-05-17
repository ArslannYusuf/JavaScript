// Dinamik element oluşturma - createElement()
const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

console.log(cardBody);

const link = document.createElement("a");
link.id = "goMyGithub";
link.href = "https://github.com/ArslannYusuf";
link.className = "btn btn-secondary btn-sm mt-3";
link.target = "_blank";
link.innerHTML = "Go My Github";

// appendChild() -> sonuna ilave eder -- prependChild() -> bastan ilave eder
cardBody.appendChild(link); // Go My Github butonu eklendi




/* 
<li class="list-group-item d-flex justify-content-between">
    Todo 2
        <a href="#" class="delete-item">
          <i class="fa fa-remove"></i>
        </a>
</li> */

const todo = document.createElement("li");
const todoLink = document.querySelector("a");
const item = document.createElement("i");

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";
todoLink.className = "delete-item";
todoLink.href = "#";
//item.className = "fa fa-remove";
    

todoLink.appendChild(item); // i tagini a tagina ekledim
todo.appendChild(todoLink); // a tagini li tagina ekledim

todoList.appendChild(todo);