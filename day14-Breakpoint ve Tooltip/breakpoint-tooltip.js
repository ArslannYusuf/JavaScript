// Breakpoint ve Tooltip Nedir?

/* 
  Tooltip : kod yazımı esnasında keyword yazımı tamamlanmadan derleyici tarafından çıkarılan bilgilendirme pop-up'larıdır. 
  
    Örnek: toStri...   methodunu yazarken;    pop-up olarak  --> function toString():    string   
    şeklinde bilgilendirme mesajı verir...



  Breakpoint : Kodlarımızı derleme esnasında ileriye dönük hata tespitleri için ilgili satırlara "debugger" keywordunu kullanabiliriz.

     Tespitlerimizi ise: incele/sources kısmına gelerek yan modulde bulunan "step over (sağ yönlü ok)" ile tek tek, satır satır inceleyebiliriz


*/


let a = 10;
let b = 20;
debugger; // bu satırdan itibaren "sources" sayfasında işlemleri adım adım takip edebiliriz
let c = a + b;
let d = a + b + c;
let e = a + c + d;

let sonuc = a + b + c + d + e;
console.log(sonuc);