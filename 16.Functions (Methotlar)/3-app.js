/* 
    --- Geriye deger donduren method ---

    1- Parametresiz ve geriye deger donduren method

    function functionName() {
        kod bloklari
        return functionName;
    }

    2- Parametreli ve geriye deger donduren method

    function functionName(parametre1, parametre2, ...) {
        kod bloklari
        return functionName;
    }


    Return keyword'u; 
    1- Bir degeri methodun disarisina cikarmak, tasimak icin kullanilir
    2- Bir methodu bitiren anahtar kelimedir. (return keyword'unden sonra scope icine yazilan diger kodlar calismaz... )
*/

let donenDeger = cube(2);
kareAl(donenDeger);

function cube(sayi) {
  let sonuc = sayi * sayi * sayi;
  console.log(sonuc);
}

function kareAl(sayi) {
  let sonuc = sayi * sayi;
  return sonuc;
}

// -----------------


function parametresizFonksiyon() {
    console.log("Bu parametresiz bir fonksiyondur.");
}

function fonksiyonuDondur() {
    return parametresizFonksiyon;
}

var dondurulmusFonksiyon = fonksiyonuDondur();
dondurulmusFonksiyon(); // "Bu parametresiz bir fonksiyondur." çıktısını verecek



function selam(){
    console.log("Hello JS");
    // void --> geriye deger dondurmeyen
}
selam();