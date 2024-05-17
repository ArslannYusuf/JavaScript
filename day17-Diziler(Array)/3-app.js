// Product Search App
 
let urun1 = {
    isim: "Lenovo ideapad3",
    kategori: "Teknoloji",
    fiyat: 5.599
}

let urun2 = {
    isim: "Lenovo Gaming - 15.6''",
    kategori: "Teknoloji",
    fiyat: 15.479
}

let urun3 = {
  isim: "Macbook Air",
  kategori: "Teknoloji",
  fiyat: 35.999
}

let urun4 = {
  isim: "Lenovo V15 ",
  kategori: "Teknoloji",
  fiyat: 32.459
}

let urun5 = {
  isim: "Macbook Pro",
  kategori: "Teknoloji",
  fiyat: 42.899
};

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];

let kullaniciUrunIsmi = prompt("Lutfen urun ismini giriniz:");


filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);



function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function(urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)) {
        filtreliUrunler.push(urun);
    }
});
}

function filtreliUrunleriYazdir(urunler) { 
    urunler.forEach(function (urun) {
        alert(
          "--------------------------------------------" +
            "\n" +
            "| " +
            urun.isim +
            " | " +
            urun.fiyat +
            " TL  " +
            " | " +
            urun.kategori +
            "\n" +
            "--------------------------------------------"
        );
    })
}
