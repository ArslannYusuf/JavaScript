// document write ile cikti verme
document.write("Hello World <br>");
document.write("Hello JS <br>");
document.write(2021 + "<br>");
document.write(true);

// console.log ile cikti verme
console.log("Hello World");
console.log("Hello JS");
console.log(3.14);
console.log({ name: "Yusuf", surname: "Arslan" });

console.error("Hata mesaji");
console.warn("Uyarı mesaji");


// console.clear();  -- console temizleme

let a = 10;
let b = 20;

console.log("   iki sayinin toplami = ", a + b);
console.log("   iki sayinin toplami = " + (a + b));

// alert(uyari) popup ile cikti verme

let x = 30;
let y = 20;

alert("iki sayinin toplami = " + (x + y));

alert("F5 tusuna lutfen basmayin !!!");



//NOTLAR

console.log(window); // JS'in en buyuk objesidir, icerisinde bir suru method ve ozellik barindirir, tarayicida gorunen tum elementler bu objenin icerisinde yer alir

console.log(document.location.host); //document objesinin icindeki location objesinin host ogesininin degerini verir
