/* 
    --- Mouse Events ---

    DOMContentLoaded -- HTML sayfasını yüklendikten sonra tetiklenir
    load -- HTML sayfasını yüklendikten sonra tetiklenir

    click    -- sayfanın herhangi bir yerine tıklandıgında tetiklenir
    dblclick -- sayfanın herhangi bir yerine cift tıklandıgında tetiklenir

    mouseover -- fare imleci belirli bir öğenin içinde iken tüm elementlerinde ayrı ayrı tetiklenir
    mouseout  -- fare imleci belirli bir öğenin içinden ayrıldıgında tetiklenir
    
    mouseenter -- fare imleci bir ögenin icine geldiginde bir kez tetiklenir
    mouseleave  -- bir ogenin uzerinde tiklandiginda tetiklenir
*/

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", run());
// sayfa yuklenir yuklenmez direk tektiklenir, cunku window objesinin kendisine addEventListener metodu eklendi

function run() {
    alert("DOMContentLoaded tetiklendi");
}

// load
window.addEventListener("load", run2());
function run2() {
    alert("load tetiklendi");
}

// click
const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click", run3);
function run3() {
    alert("card-title tetiklendi - click");
}

// dblclick
const todoEkleButton = document.querySelector("#todoAddButton");
todoEkleButton.addEventListener("dblclick", run4);
function run4() {
    alert("todoEkleButton tetiklendi - dblclick");
}

// mouseover
const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover", run5);

// mouseout
// cardBody.addEventListener("mouseout", run5);

function run5(e) {
    console.log(e.type);
}

// mouseenter
cardBody.addEventListener("mouseenter", run5);

// mouseleave
cardBody.addEventListener("mouseleave", run5);
