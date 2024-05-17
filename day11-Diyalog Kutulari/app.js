/* 
---------- Diyalog Kutulari ----------
    --> alert() - uyari kutusu
    --> confirm() - onay kutusu
    --> prompt() - kullanicidan deger alir

    NOT: bu 3 method window objesi icinde yer alir
*/


alert("bu bir alert kutusu");
alert("Lütfen sayfadaki zorunlu alanlari doldurunuz!");


let isim = prompt("İsmini giriniz:");
console.log(isim);

//NOT: kullanicinin girdigi number, string, boolean vb.degerler prompt() methodu ile her zaman string return eder.


let onay = confirm("silmek istediginizden emin misiniz?");
console.log(onay);

//NOT: kullanicinin onayi iptal ederse false, onay verirse true return eder.