// Kosul Yapilari

let not = 80;

if(not >= 50){
    console.log("Gectiniz, notunuz:" + not);
}else{
    console.log("Kaldiniz, notunuz:" + not);
}


let yas = Number(prompt("Yasinizi giriniz:"));
let para = Number(prompt("Butcenizi giriniz:"));

if (yas >= 18 && para >= 3000) {
    alert("Ehliyet alabilirsiniz");
} else {
    alert("Ehliyet alamazsiniz");
}