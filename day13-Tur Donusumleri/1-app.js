/* 
    --- TÜR DÖNÜŞÜMLERİ ---
    
    string, number, boolean, null and undefined     -> primitive
    
    object, function    -> reference, non-primitive
*/



// string veri tipinden number veri tipine dönüştürmek;

// let a = 5;
// let b = Number("10");
// console.log(a+b, typeof (a+b));

// let c = Number(b);
// console.log(c, typeof c); // 10 number



// parseInt() methodu ile string --> number
// let a = 5;
// let b = parseInt("10");
// console.log(a+b, typeof (a+b)); // 15  number


// parseFloat() methodu ile string --> number
// let a = 5;
// let b = parseFloat("10.5");
// console.log(a+b, typeof (a+b)); // 15.5  number

//--------------------------------------

// number veri tipinden string veri tipine dönüştürmek;

//1.yol
// let x = 5;
// let y = String(10);
// console.log(x+y, typeof (x+y)); // 510 string

//2.yol
// let x = 5;
// let y = x.toString();
// console.log(x+y, typeof (x+y)); // 55 string

//--------------------------------------

// boolean veri tipinden string veri tipine dönüştürmek;

// let sonuc = String(true);
// console.log(sonuc, typeof sonuc); // true string


//--------------------------------------

// NOT: NaN (Not a Number) veri tipi de string veri tipine dönüştürmez. Cunku NaN, Number() methodu ile string --> number olur. NaN degeri Number() methodu ile string --> number olamaz.

//--------------------------------------

// array veri tipinden string veri tipine dönüştürmek;
// let rakamlar = String([1, 2, 3, 4, 5]);
// console.log(rakamlar, typeof  rakamlar); // 1,2,3,4,5 string

//let rakamlar = Number([1, 2, 3, 4, 5]);
//console.log(rakamlar, typeof  rakamlar); // NaN
