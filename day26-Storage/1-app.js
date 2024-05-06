//? Session Storage: calisilan sayfadaki verileri depolamak icin kullanilir. Window objesi kapatildiginda silinir.
//! Browser kapatildiginda kaybolur.
//! Degerlerin tipleri string olur.


// deger ekleme -> sessionStorage.setItem("key", "value");
sessionStorage.setItem("1", "JavaScript");
sessionStorage.setItem("2", "HTML");
sessionStorage.setItem("3", "CSS");
sessionStorage.setItem("4", "Bootstrap");
sessionStorage.setItem("5", "React");
sessionStorage.setItem("6", "Next.js");
sessionStorage.setItem(7, 777);


// deger silme 
sessionStorage.removeItem("2");

let value = sessionStorage.getItem("2");
if (value===null) {
    console.log("Deger bulunamadi");
}else {
    console.log("Deger bulundu: " , value);
}

// tum degerleri silme
// sessionStorage.clear();


// degerler string olarak tutulur.
let value2 = sessionStorage.getItem("7");
console.log(value2, typeof value2);

// Session Storage - Arraye Cevirme
let names = ["Ahmet", "Mehmet", "Ali", "Veli"];
sessionStorage.setItem("names", JSON.stringify(names)); // JSON.stringify ile stringi arraye ceviririz.

let value3 = JSON.parse(sessionStorage.getItem("names")); // array gibi gorunen arrayi JSON.parse ile arraye ceviririz.
console.log(value3, typeof value3);


value3.forEach(function (name) {
    console.log(name)
});