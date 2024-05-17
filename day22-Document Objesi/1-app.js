// Document Objesi

/* 
    -- DOCUMENT OBJESI --
    * document objesi window objesi içinde yer alır.
    * document objesi ile HTML sayfasına erişebiliriz.
    * document objesi ile sayfanın herhangi bir noktasına erişebiliriz.
    * 
*/

let value;

console.log(document);

value = document.location.href; // sayfanın url'si
value = document.location.hostname; // sayfanın host adı
value = document.location.port; // sayfanın portu
value = document.location.protocol; // sayfanın protocolu
value = document.location.pathname; // sayfanın pathi
value = document.location.characterSet; // sayfanın pathi


value = document.characterSet; // UTF-8
value = document.title; // İnput Eventlari
value = document.domain; // 127.0.0.1 localhost -> declared domain
value  = document.contentType; // text/html


value = document.links; // [a.delete-item, a#clearButton.btn.btn-primary.btn-sm.mt-3, clearButton: a#clearButton.btn.btn-primary.btn-sm.mt-3]

value = document.links.item(1); // <a href="#" id="clearButton" class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

value = document.links.item(1).id; // clearButton

value = document.links.item(1).getAttribute("class"); // btn btn-primary btn-sm mt-3

value = document.links.item(1).classList[3]; // mt-3

value = document.forms.item(1).id; // todoListForm

value = document.forms.item(1).name; // form2

value = document.forms.item(1).children; // 0:input#todoSearch.form-control.mt-3 1:hr


console.log(value);