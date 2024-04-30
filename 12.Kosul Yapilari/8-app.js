/* 
    --- ATM uygulamasi ---

    1- Bakiye görüntüleme
    2- Para çekme
    3- Para yatırma
    4- Cıkış
*/

let bakiye = 1000;

let secim = prompt(
  "Lütfen yapmak istediğiniz işlemi seçiniz:" +
    "\n" +
    "1 - Bakiye Görüntüleme" +
    "\n" +
    "2 - Para Çekme" +
    "\n" +
    "3 - Para Yatırma" +
    "\n" +
    "4 - Çıkış"
);

switch (secim) {
  case "1":
    alert("Bakiyeniz: " + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekilecek tutarı giriniz:"));
    if (cekilecekTutar > bakiye) {
      alert(
        "Yetersiz bakiye!" +
          "\n" +
          "Bakiyeniz: " +
          bakiye +
          "\n" +
          "Eksik tutar: " +
          (cekilecekTutar - bakiye)
      );
    } else {
      bakiye -= cekilecekTutar;
      alert(
        "Para çekme işlemi başarıyla gerçekleşti... " +
          "\n" +
          "Kalan Bakiyeniz: " +
          bakiye
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz:"));
    bakiye += yatirilacakTutar;
    alert(
      "Para yatırma işlemi başarıyla gerçekleşti..." +
        "\n" +
        "Yeni bakiyeniz: " +
        bakiye
    );
    break;

  case "4":
    alert(
      "Çıkış yapıldı... Kartınızı almayı unutmayınız!!! " +
        "\n" +
        "İyi günler dileriz..."
    );
    break;

  default:
    alert("Geçersiz işlem, lütfen tekrar deneyiniz");
    break;
}
