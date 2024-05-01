/* 
    Parametreli ve geriye dondurmeyen method (void)

    function functionName(parametre1, parametre2, ...) {
        kod bloklari
    }

*/

function yazdir(isim, soyisim) {
  console.log(isim + " " + soyisim);
}

yazdir("Yusuf", "Arslan"); //Yusuf Arslan
yazdir(); //undefined undefined

//---------------------

function cube(sayi) {
    console.log(sayi * sayi * sayi);
}

cube(5); // 125
cube(); // NaN

//---------------------


let yas = Number(prompt("Ehliyet alabilmek icin yaşınızı giriniz:"));

function ehliyetAl(yas) {
    if (yas >= 18) {
        alert("Ehliyet alabilirsiniz");
    } else {
        alert("Ehliyet alamazsiniz");
    }
}

ehliyetAl(yas);