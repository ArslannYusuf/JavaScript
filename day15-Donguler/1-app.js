// 1 den 10 a kadar olan sayıları ekrana yazdırın

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1 den 10 a kadar olan çift sayıları ekrana yazdırın

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 1 den 10 a kadar olan tek sayıları ekrana yazdırın

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

/* 
    JavaScript
    Java
    JavaScript
    Java
    JavaScript
    Java
    JavaScript
    Java
*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("JavaScript");
  } else {
    console.log("Java");
  }
}


// 50 den 1 e kadar olan sayilari console yazdırıp, toplamını ekrana yazdırın

let toplam = 0;
for (let i = 50; i >= 1; i--) {
    toplam += i;
    console.log(i);
}

console.log("Toplam: " , toplam);
