// ----Yakit Hesaplama----

/* 
    1- Dizel   : 24.53
    2- Benzin  : 22.25
    3- Lpg     : 11.1

    Gelen musteriden alacagimiz bilgiler;
    1- Yakit türü
    2- Yuklenecek yakit litresi

*/

let dizel = 24.53,
  benzin = 22.25,
  lpg = 11.1;

const altSatir = "\r\n"; // alt satira gecmek icin

const yakitMetni =
  "1-Dizel" +
  altSatir +
  "2-Benzin" +
  altSatir +
  "3-Lpg" +
  altSatir +
  "Yakit türünüzü seciniz: ";

let yakitTipi = prompt(yakitMetni);

if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
  let yakitLitresi = Number(prompt("Yuklenecek yakit litresini giriniz:"));
  let bakiye = Number(prompt("Bakiyenizi giriniz:"));

  if (yakitTipi == "1") {
    //Dizel
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      alert(
        "Yakıt alma işlemi başarılı " + altSatir + "Kalan bakiyeniz: " + bakiye
      );
    } else {
      alert(
        "Yetersiz bakiye!" +
          altSatir +
          "Ödenecek tutar: " +
          odenecekTutar +
          altSatir +
          "Bakiyeniz: " +
          bakiye +
          altSatir +
          "Eksik tutar: " +
          (odenecekTutar - bakiye)
      );
    }
  } else if (yakitTipi == "2") {
    //Benzin
    let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      alert(
        "Yakıt alma işlemi başarılı " + altSatir + "Kalan bakiyeniz: " + bakiye
      );
    } else {
      alert(
        "Yetersiz bakiye!" +
          altSatir +
          "Ödenecek tutar: " +
          odenecekTutar +
          altSatir +
          "Bakiyeniz: " +
          bakiye +
          altSatir +
          "Eksik tutar: " +
          (odenecekTutar - bakiye)
      );
    }
  } else if (yakitTipi == "3") {
    //Lpg
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
      bakiye = bakiye - odenecekTutar;
      alert(
        "Yakıt alma işlemi başarılı " + altSatir + "Kalan bakiyeniz: " + bakiye
      );
    } else {
      alert(
        "Yetersiz bakiye!" +
          altSatir +
          "Ödenecek tutar: " +
          odenecekTutar +
          altSatir +
          "Bakiyeniz: " +
          bakiye +
          altSatir +
          "Eksik tutar: " +
          (odenecekTutar - bakiye)
      );
    }
  }
} else {
  alert("Lütfen geçerli bir türü seçiniz!");
}
