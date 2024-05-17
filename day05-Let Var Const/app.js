// Var - Let - Const

/* 
   var degiskeni;
  *  var ile tanimlanan degiskenler her zaman function scope ozelligine sahiptir, function scope icinde bulunan block scope'lardan da erisilebilir
  !  eksi yonu --> ram bellekte cok fazla yer kaplar


   let/const degiskeni;
  *  let ve const ile tanimlanan degiskenler her zaman block scope ozelligine sahiptir
 
 
  
*/

function selamVer() {
  var selam = "Selam"; //function scope
  console.log(selam);

  if (true) {
    let a = 10; //block scope
    console.log(a);

    const b = 20; //block scope
    console.log(b);
  }
}

selamVer();

//? var ile ayni degisken ismi ile birden fazla degisken tanimlanabilir
var a = 10;
var a = 20;
console.log(a); //20

//! let ile ayni degisken ismi ile birden fazla degisken tanimlanamaz
let x = 10;
let x = 20;
console.log(x); // hata verir (Uncaught SyntaxError: Identifier 'x' has already been declared)

// LET & CONST arasindaki fark?

// const (constant) - sabit, degismez
const num = 10;
num = 99; // hata verir (Uncaught TypeError: Assignment to constant variable)

let num2 = 10;
num2 = 99; // hata vermez


// objelerde const ile tanimlananlari degistirme
const user = {
  name: "Yusuf",
  surname: "Arslan",
};

user.name = "Ahmet";  // burada " user.username " user objesinin icindeki name degiskenini belirterek datayı update edebiliriz
console.log(user); // Ahmet