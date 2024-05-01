// Kelime sayısı bulma uygulaması

let metin = "JavaScript ile yazılım geliştirme.";

let harf = prompt(
  "JavaScript ile yazılım geliştirme." +
    "\n" +
    "Yukarıdaki metinde yer alan bir harf giriniz:"
);

let sonuc = bul(harf);

alert("Harf sayısı: " + sonuc);

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()) {
      toplam += 1;
    }
  }
  return toplam;
}
