/* 
    --- Array  (Diziler) ---

    array --> birden fazla degeri bir araya toplama, bir araya ekleme, silme gibi islemler yapabilmemize yarayan bir veri tipidir.

    let array = [deger1, deger2, deger3, ...]  
    
    Not: JS ile arrayler farkli veri tiplerinde degerler tutabilir. Diger programlama dillerinde boyle bir imkan yok.

*/
//------Array Olusturma (default olarak olsuturup sonradan deger atamsi yapilabilir)

let dizi1 = [];
let dizi2 = new Array();

dizi1[0] = "Yusuf";
dizi1[1] = 20;

dizi2[0] = "Javascript";
dizi2[1] = 2024;

//-------Array Olusturma (parametre ile deger atamasi yapilabilir)

let dizi3 = ["Yusuf", 20, "Javascript", 2024];
let dizi4 = new Array("Yusuf", 20, "Javascript", 2024);

//--------------------------------

let sayilar = [0, true, 2, null, "4", 5.7, "Yusuf", 7, undefined,"", 9];
console.log(sayilar);
console.log(sayilar[6]); // Yusuf
console.log(sayilar[20]); // undefined ( array index out of bound exception yerine undifined döndürür)

sayilar[9] = "Javascript";
console.log(sayilar[9]); // "" --> "Javascript"

sayilar.length - 1 // dizideki son elemani verir --> Javascript


