// --- input events ---

/* 
    inputa herhangi bir değişiklik olursa tetiklenir

    focus - inputa tıklandıgında tetiklenir
    blur  - inputtan ayrıldıgında tetiklenir
    copy  - inputa kopyalandıgında tetiklenir
    paste - inputa yapıştırıldıgında tetiklenir
    cut   - inputa kırpıldıgında tetiklenir
    select - inputa seçildiğinde tetiklenir
*/

const input = document.querySelector("#todoName");

input.addEventListener("focus", run); 
input.addEventListener("blur", run); 
input.addEventListener("copy", run); 
input.addEventListener("paste", run); 
input.addEventListener("cut", run); 
input.addEventListener("select", run); 


function run(e) {
    console.log(e.type);
}