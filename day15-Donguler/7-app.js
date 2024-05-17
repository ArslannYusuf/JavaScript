// Faktoriyel Hesaplama

// 5! = 5 * 4 * 3 * 2 * 1  --> 120

let sayi = Number(prompt("Lütfen bir sayi giriniz:"));
let sonuc = 1;

for (let i = 1; i <= sayi; i++) {
  sonuc *= i;
}
alert("Sonuc: " + sonuc);    