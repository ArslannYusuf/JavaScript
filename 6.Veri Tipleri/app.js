
/* 
--- Veri Tipleri ---
    1-String
    2-Number
    3-Boolean
    4-Null
    5-Undefined
    6-Object
    7-Function
*/

//primitive types (ilkel veri tipleri)
// String 
let isim = "Yusuf";
console.log(isim, typeof isim);


// Number 
let yas = 20;
console.log(yas, typeof yas);

let sayi = 3.14;
console.log(sayi, typeof sayi);

let stringDegisken = "Yasiniz :";
let yas2 = 20;
console.log(stringDegisken + yas2); // "Yasiniz : 20"


// Boolean (true/false)
console.log(5 > 2); // true
console.log(5 < 2); // false


let x = 10;
let y = 20;
let sonuc = x + y;
console.log(sonuc > 100); // false
console.log(sonuc != 30); // false
console.log(sonuc == 30); // true


// Null (bos deger)
let nullDegisken = null;
console.log(nullDegisken, typeof nullDegisken);// null "object"

nullDegisken = 10;
console.log(nullDegisken, typeof nullDegisken);// 10 "number"


// Undefined (Hicbir deger atanmadi)
let undefinedDegisken = undefined;
console.log(undefinedDegisken, typeof undefinedDegisken);// undefined "undefined"

let a; 
console.log(a, typeof a);// undefined "undefined"



// non-primitive types (ilkel olmayan - referans veri tipleri)
// Object
let insan= {
    name: "Yusuf",
    surname: "Arslan",
    yas: 20
}
console.log(insan, typeof insan);

// Array (dizi) - non-primitive, referans veri tipi, veri tipi object'dir
let rakamlar = [1, 2, 3, 4, 5];
console.log(rakamlar, typeof rakamlar);


// Function
let selam = function(){
    console.log("Hello JS");
}
selam();
console.log(typeof selam);// function


//