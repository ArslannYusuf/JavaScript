//
/*
         Deger ve Referans Tipleri

        1- Deger Tipleri (Primitive Types) İlkel Veri Tipleridir, stack alanında tutulur.
         * string
         * number
         * boolean
         * null
         * undefined
         * symbol

        2- Referans Tipleri (Reference Types) İlkel Olmayan Veri Tipleridir, heap alanında tutulur. 
         * object
         * function
         * array

!        Not: referans tipleri aynı içeriklere sahip olsalar dahi heap memory'de  referans adresleri farklı oldugundan birbirlerine eşit değillerdir.

        
*/

// Not: deger tiplerine istenildigi kadar deger atanabilir. atanan degerlerin degistirilmesi birbirlerine eşitleme durumlarında bile biri digerini etkilemez.
let a = 10;
let b = a;
console.log(a, b); // 10 10

b = 20;
console.log(a, b); // 10 20


// ------------------------


let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];

if (dizi1 == dizi2) {
  console.log("diziler ayni");
} else {
  console.log("diziler farkli");
}

// yukarıdan dönen sonuc diziler farklıdır. (acıklama yukarıda Not olarak verildi)




// ------------------------

let dizi3 = [1, 2, 3];
let dizi4 = dizi3;

if (dizi3 == dizi4) {
  console.log("diziler ayni");
} else {
  console.log("diziler farkli");
}

// yukarıdan dönen sonuc diziler aynıdır. (acıklama yukarıda Not olarak verildi)


// ------------------------

let dizi5 = [1, 2, 3];
let dizi6 = dizi5;

dizi6.push(50);

console.log(dizi5); // [ 1, 2, 3, 50 ]

// dizileri birbirine eşitledikten sonra herhangi bir dizi üzerinde yapacağımız değişiklik diğer diziyi de etkiler

