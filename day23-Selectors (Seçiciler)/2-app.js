// Style Özelliğini Anlama

const todo = document.querySelectorAll(".list-group-item")[0];
const todoList = document.querySelector(".list-group");
const clearButton = document.querySelector("#clearButton");
// console.log(clearButton);

todo.style.color = "red";
todo.style.backgroundColor = "secondary";
todo.style.fontWeight = "900";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "70px";


todoList.style.marginTop = "70px";
todoList.style.marginLeft = "90px";

clearButton.style.backgroundColor = "red";
clearButton.style.fontWeight = "bold";
clearButton.style.borderRadius = "50px";
clearButton.style.padding = "10px";
