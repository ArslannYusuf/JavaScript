// String Sınıfının Metotları

// charAt()       -> Stringin belirli bir karakterini verir
// concat()       -> Stringi birleştirir
// indexOf()      -> Stringin belirli bir karakterin indexini verir
// lastIndexOf()  -> Stringin belirli bir karakterin indexini verir
// toUpperCase()  -> Stringin kopyasını alıp büyük harfe çevirir
// toLowerCase()  -> Stringin kopyasını alıp küçük harfe çevirir
// trim()         -> Stringin basındaki ve sonundaki boslukları kaldırır
// slice()        -> Stringin belirli bir kısmını kesip yeni bir string oluşturur
// substring()    -> Stringin belirli bir kısmını kesip yeni bir string oluşturur
// replace()      -> Stringin belirli bir kısmını değiştirir
// split()        -> Stringi belirli bir karaktere göre böler ve diziye dönüştürür
// valueOf()      -> Stringi diziye çevirir
// startsWith()  -> Stringin belirli bir kısmı ile başlayıp başlamadığını kontrol eder, büyük küçük harf hassasiyeti vardır
// endsWith()    -> Stringin belirli bir kısmı ile bitip bitmedigini kontrol eder, büyük küçük harf hassasiyeti vardır


let kurs = "Modern Web Geliştirme Kursu    ";

// charAt()
let karakter = kurs.charAt(5); // n

// concat()
let tarih = "2024";
let sonuc = kurs.concat(" ", tarih); // Modern Web Geliştirme Kursu 2024

// indexOf() 
let index = kurs.indexOf("G"); // 11

// lastIndexOf()
let lastIndex = kurs.lastIndexOf("K"); // 22

// toUpperCase()
let buyuk = kurs.toUpperCase(); // MODERN WEB GELIŞTİRME KURSU

// toLowerCase()
let kucuk = kurs.toLowerCase(); // modern web geliştirme kursu

// trim()
let boslukSil = kurs.trim(); // Modern Web Geliştirme Kursu

// slice()
let slice = kurs.slice(7, 10); // Web

// substring() -  ilk indeksi alır - son indeksi almaz, tek parametre girilirse girilen indeksten sona kadar alır
let substring = kurs.substring(0, 5); // Moder
let substring2 = kurs.substring(7); //  Web Geliştirme Kursu

// replace()
let replace = kurs.replace("Modern", "Güncel"); // Güncel Web Geliştirme Kursu

// split() 
let dizi = kurs.split(" "); // ["Modern", "Web", "Geliştirme", "Kursu"]

// valueOf()
let dizi2 = Array.from(kurs); // ["M", "o", "d", "e", "r", "n", " ", "W", "e", "b", " ", "G", "e", "l", "i", "s", "t", "i", "r", "m", "e", " ", "K", "u", "r", "s", "u"]

// startsWith()
let baslangic = kurs.startsWith("M"); // true

// endsWith()
let bitis = kurs.endsWith("Kursu"); // true