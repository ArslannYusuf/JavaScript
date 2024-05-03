// Math Sınıfı Metotları (En sık kullanılan metotlar)

/* 
    1- Floor()      -> Asagiya yuvarlar ( noktadan sonrasını siler )
    2- Ceil()       -> Yukariya yuvarlar ( noktadan onceyi yukarıya yuvarlar )
    3- Round()      -> Noktaya gore yuvarlar ( .50 ve üzeri yukarı, .49 ve altı aşagı yuvarlar )

    4- Max()        -> dizideki En buyuk
    5- Min()        -> dizideki En kucuk

    6- Random()     -> 0 ile 1 arasında Rastgele sayı olusturur
    7- Abs()        -> Mutlak deger
    8- Sqrt()       -> Karekok 
    9- Pow()        -> Uslu deger

    Property:
    ---> PI sayisi  : 3.14

*/
//Floor()
let a = 3.15;
Math.floor(a); // 3

//Ceil()
let b = 3.85;
Math.ceil(b); // 4

// Round()
let c = 3.5;
Math.round(c); // 4

let d = 3.49;
Math.round(d); // 3

let e = 3.51;
Math.round(e); // 4

// Max()
Math.max(5, 6, 7, 8, 9); // 9

// Min()
Math.min(-3, 0, 5, 6, 7, 8, 9); // -3

// Random() -- dogrulama kodları olusturulabilir !!!
let randomDeger = Math.random(); // 0 ile 1 arasında random sayı üretir
let sonuc = randomDeger * 100;
let sonucYuvarla = Math.floor(sonuc);

console.log(randomDeger); // 54.2345701972412
console.log(sonuc); // 54.23457019724
console.log(sonucYuvarla); // 54

// Abs()
Math.abs(-5); // 5

// Sqrt()
Math.sqrt(25); // 5

// Pow()
Math.pow(2, 3); // 8


// PI (property)
console.log(Math.PI); // 3.14
