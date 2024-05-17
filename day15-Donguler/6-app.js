// asal sayi bulma uygulamasi

// asal sayi: bir sayinin 1'e ve kendinden baska boleni olmayan sayilar

let sayi = Number(prompt("Lütfen bir sayi giriniz:"));
let sonuc = true;

for (let i = 2; i < Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    // Asal degildir
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert(sayi + " asal sayidir.");
} else {
  alert(sayi + " asal sayi degildir!");
}
