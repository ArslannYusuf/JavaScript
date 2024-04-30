/* 
    --SORU SAYILARI--
    1-Türkçe 40
    2-Matematik 40
    3-Sosyal Bilimler 20
    4-Fen Bilimleri 20

    NOT: herbir soru 4 puan üzerinden degerlendirilecek


    -----> ÖSYM 100 puan veriyor
    -----> Okul max 60 puan veriyor
*/

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let nl = "\n";
let secim = Number(
  prompt(
    "TYT puan hesaplama uygulamasına hoşgeldiniz..." +
      nl +
      "1- Puan hesapla" +
      nl +
      "2- Çıkış yap"
  )
);

switch (secim) {
  case 1:
    okulPuani = Number(prompt("Okul puanınızı giriniz:"));
    if (okulPuani <= 60) {
      turkceDogru = Number(prompt("Türkçe doğru sayısı:"));
      turkceYanlis = Number(prompt("Türkçe yanlış sayısı:"));

      matematikDogru = Number(prompt("Matematik doğru sayısı:"));
      matematikYanlis = Number(prompt("Matematik yanlış sayısı:"));

      sosyalDogru = Number(prompt("Sosyal bilimler doğru sayısı:"));
      sosyalYanlis = Number(prompt("Sosyal bilimler yanlış sayısı:"));

      fenDogru = Number(prompt("Fen bilimleri doğru sayısı:"));
      fenYanlis = Number(prompt("Fen bilimleri yanlış sayısı:"));

      let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;

      let yanlsiSayisi =
        turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;

      let netSayisi = dogruSayisi - yanlsiSayisi / 4;
      puan = netSayisi * 4 + 100 + okulPuani; //100 puan ÖSYM den

      alert("TYT Puanınız: " + puan);
    } else {
      alert("Okul puanınız 60'dan büyük olamaz!!!"+nl+"Okul puanınızı yeniden giriniz...");
    }
    break;

  case 2:
    alert("Programdan çıkılıyor...");
    break;

  default:
    alert(
      "Hatalı seçim yaptınız!" +
        nl +
        "Lütfen geçerli aralıkta bir seçim yapınız..."
    );
    break;
}
