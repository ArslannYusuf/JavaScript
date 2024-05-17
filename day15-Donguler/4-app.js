/* 
    break ve continue kullanımı

    break --> donguden cikar
    continue --> dongu devam eder
*/


//? --- break
// 1 den 10 a kadar olan sayilari yazdiralim, 8 e  geldigimizde donguden cikaralim

let sayac = 1;

while (sayac <= 10) {
  console.log(sayac);
  if (sayac == 8) {
    break;
  }
  sayac++;
}


console.log("---------------")

//? --- continue

// 1 den 10 a kadar 8 haric sayilari yazdiralim

let sayac2 = 0;

while (sayac2 < 10) { 
    sayac2++;
    if (sayac2 == 8) {
        continue;
    }
    console.log(sayac2);
}
