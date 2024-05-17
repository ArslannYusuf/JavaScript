// Events (Olaylar) - Event Listeners

/* 
    onclick - sayfanın herhangi bir yerine tıklandıgında tetiklenir
    onchange - sayfanın herhangi bir yerine deger degistiğinde tetiklenir
    onkeydown - herhangi bir tusa bastıgında tetiklenir
    onkeyup - herhangi bir tusa bırakıldıgında tetiklenir
    onmouseout - fare imleci belirli bir öğenin üzerinden ayrıldığında tetiklenir
    onload - sayfa yüklendigince tetiklenir
*/

function changeTitle() {
  document.querySelectorAll(".card-title")[1].textContent =
    "Tüm Todo Başlığını Değiştirdim";
}

// addEventListener() -> even olusturur

const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click", changeTitle); // changeTitle methodunun içeride parantezlerini açma, yoksa  daha click işlemi yapılmadan method aktif olur

//------------------------------------------

clearButton.addEventListener("click", changeTitle2);
function changeTitle2(e) {
  console.log(e); // Event Object - "e" naming convention!!
  console.log(e.type); //click
  console.log(e.target); //<a href="#" id="todoClearButton" onclick="changeTitle()" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>
  console.log(e.target.textContent); //Tüm Todoları Temizle
  console.log(e.target.className); //btn btn-primary btn-sm mt-3
}
