/* 
    do{
    
    kod bloklari

    }while(kosul);
    
*/

// 1 den 10 a kadar olan sayilari yazdiralim


let sayac = 1;
do {
    console.log(sayac);
    sayac++;
} while (sayac <= 10);


// 1 den 20 ye kadar olan tek sayilarin toplamini bulalim

let toplam = 0;
let sayac2 = 1;

do {
    if (sayac2 % 2 == 0) {
        toplam += sayac2;
    }
    sayac2++;
} while (sayac2 <= 20);
console.log("Toplam: ", toplam)