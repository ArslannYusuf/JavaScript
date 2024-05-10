// --- Destructuring Assigment (Yeniden Yapilandirma Görevi)---
// not : array veya object gibi degerler daha tanimlanirken Destructuring Assigment kullanilir.

let langs = ["Java", "Python", "C#", "JavaScript"];

// normal versiyon
// let lang1, lang2, lang3, lang4;
//
// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

// Destructuring Assigment
let [lang1, lang2, lang3, lang4] = langs;

console.log(lang1, lang2, lang3, lang4);



// example: array
const hesapla = (a, b) => {
  const toplam = a + b;
  const cikar = a - b;
  const carp = a * b;
  const bol = a / b;

  const dizi = [toplam, cikar, carp, bol];
  return dizi;
};

let [a, b, c, d] = hesapla(10, 5);
console.log(a, b, c, d);



// example : object
const bilgiler = {
  name: "Yusuf",
  lastname: "Arslan",
  title: "Frontend Developer",
};
// let isim, soyisim, unvan;
// isim = bilgiler.name;
// soyisim = bilgiler.lastname;
// unvan = bilgiler.title;

let { name: isim, lastname: soyisim, title: unvan } = bilgiler;

console.log(isim, soyisim, unvan);
