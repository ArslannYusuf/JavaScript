// Mükemmel Sayi Bulma Uygulaması

// Mükemmel sayı: pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşit olan sayılara denir. Örn: 6, 28, 496

// Not: bir sayiyi tam bolmesi icin max yarisina kadar kontol ederiz

let number = Number(prompt("Mükemmel sayiyi bulmak için lütfen bir sayi giriniz:"));

isPerfectNumber(number);
function isPerfectNumber(number) {
    
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;

  if (toplam == number * 2) {
    alert(number + " -- Mükemmel sayidir");
  } else {
    alert(number + " -- Mükemmel sayi degildir!");
  }
}
