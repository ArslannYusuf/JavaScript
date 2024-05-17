// Coklu If Yapisi

/* 
    Kullanicidan isim ve tckn bilgileri alip;
    isim - bos olmamali
    tckn - 11 hane olmali
    

*/
let isim = prompt("Lutfen isminizi giriniz:");

let tckn = prompt("Lutfen TC Kimlik Numaranizi giriniz:");

// if-else yapisi
function kontrolEt(isim, tckn) {

    if (isim != "") {
        if (tckn.length == 11) {
            alert("Hosgeldiniz");
        } else {
            alert("Lutfen 11 haneli TC Kimlik Numarasi giriniz");
        }

    }else (isim == "") {
        alert("Lutfen isminizi giriniz");
    }
    }

kontrolEt(isim, tckn);



// coklu if yapisi

function kontrolEt2(isim, tckn) { 
    if (isim == "") {
        alert("Lutfen isminizi giriniz");
        return;
    }
    if (tckn.length != 11) {
        alert("Lutfen 11 haneli TC Kimlik Numarasi giriniz");
        return;
    }
        alert("Hosgeldiniz");
   
}

kontrolEt2(isim, tckn);
