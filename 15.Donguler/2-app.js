/* 
    while ( kosul ){
    
        kod bloklari

        sayacin degerini atariz
    }
*/

// 1 den 10 a kadar olan sayilari yazdiralim

let sayac = 1;

while (sayac <= 10) {
  console.log(sayac);
  sayac++;
}

// 1 den 10 a kadar olan cift ve tek sayilari yazdiralim

sayac = 1;
while (sayac <= 10) {
  if (sayac % 2 == 0) {
    console.log(sayac, "cift");
  } else {
    console.log(sayac, "tek");
  }
  sayac++;
}

// while - true ile dongu
sayac = 1;
while (true) {
  console.log(sayac);
  if (sayac == 8) {
    break;
  }
  sayac++;
}
