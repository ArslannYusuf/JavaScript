// Beden Kitle Endeksi

let kilo = Number(prompt("Kilonuzu giriniz:"));

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz:"));

let sonuc = kilo / boy ** 2;

if (sonuc < 18.5) {
  alert("Kilonuz ideal kilonun altinda");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
  alert("Kilonuz ideal kiloda");
} else if (sonuc >= 25 && sonuc <= 29.9) {
  alert("Kilonuz ideal kilonun ustunde");
} else if (sonuc >= 30 && sonuc <= 39.9) {
  alert("Kilonuz ideal kilonun ustunde");
} else if (sonuc >= 40) {
  alert("Kilonuz ideal kilonun cok ustunde (Morbid obez)");
} else {
  alert("Hatali deger girdiniz");
}