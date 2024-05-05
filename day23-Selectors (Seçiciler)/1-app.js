// Selectors (Seçiciler) - Style ÖZellikleri

// className, id, tagName




// getElementById -> id'ye gore elementi bulur
let value;

const button = document.getElementById("todoAddButton"); 

console.log(button); //<button id="todoAddButton" type="submit" class="btn btn-primary mt-4 btn-sm"> Todo Ekleyin </button>
console.log(button.id); // todoAddButton
console.log(button.getAttribute("id")); // todoAddButton


// className -> class ismine gore elementi bulur
console.log(button.className); // btn btn-primary mt-4 btn-sm
console.log(button.getAttribute("class")); // btn btn-primary mt-4 btn-sm

const classListesi = button.classList;
console.log(classListesi); // DOMTokenList(4) ["btn", "btn-primary", "mt-4", "btn-sm"]
console.log(classListesi[3]); // btn-sm

// forEach ile tum class listesini dolasabiliriz
classListesi.forEach(function (s) {
    console.log(s);
})

// text degerlerini alma
let buttonText = button.textContent; // 
console.log(buttonText); // Todo Ekleyin

let buttonText2 = button.innerHTML;
console.log(buttonText2); // Todo Ekleyin

button.textContent = "<b>Todo Ekleseneeeee</b>"; // girilen metni direk butona <b> tagi ile ekler

button.innerHTML = "<b>Todo Ekleseneeeee</b>"; // tagler gorevini yapar, text'de yansımaz


//---------------------
// className 
// getElementsByClassName -> class ismine gore tum elementleri bulur

const todoList = document.getElementsByClassName("list-group-item");
console.log(todoList); // [li.list-group-item.d-flex.justify-content-between]


//---------------------
// tagName
// getElementsByTagName -> tag ismine gore tum elementleri bulur

const formsTag = document.getElementsByTagName("form");
console.log(formsTag); // HTMLCollection(2) [form#todoAddForm.mt-2, form#todoListForm, todoAddForm: form#todoAddForm.mt-2, todoListForm: form#todoListForm, form2: form#todoListForm]

console.log(formsTag[0]); // <form id="todoAddForm" class="mt-2">…</form>

console.log(formsTag[0].id); // todoAddForm

console.log(formsTag[1].name); //form2


const formsTag2 = Array.from(document.getElementsByTagName("form")); ;
formsTag2.forEach(function (form) {
    console.log(form);
})

const todoList2 = document.getElementsByTagName("li");
console.log(todoList2); // [li.list-group-item.d-flex.justify-content-between]



//! getElementById - getElementsByClassName - getElementsByTagName methodlarinin hepsini --> querySelector - querySelectorAll methodlari ile kullanabliliriz


const clearButon = document.querySelector("#clearButton");
console.log(clearButon); // <a href="#" id="clearButton" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

const todoList3 = document.querySelector(".list-group-item");
console.log(todoList3); // <li class="list-group-item d-flex justify-content-between">…</li>


const todoList4 = document.querySelectorAll(".list-group-item");
console.log(todoList4); // [li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between]

const todoList5 = document.querySelectorAll(".list-group-item")[0];
console.log(todoList5); // <li class="list-group-item d-flex justify-content-between">…</li>


// uzun olacak ama sayisini bilmediğim yerde kullanmak istersem ;)
const todoList6 = document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length-1];
console.log(todoList6); // <li class="list-group-item d-flex justify-content-between">…</li>



const todoList7 = document.querySelectorAll("li:nth-child(1)");
console.log(todoList7); // [li.list-group-item.d-flex.justify-content-between]


const todoList8 = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todoList8.forEach(function (todo) {
    todo.style.backgroundColor = "yellow";
})
