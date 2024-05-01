/* 
    Armstong sayi: herhangi bir 3 basamakli pozitif tam sayinin rakamlarinin kupunun toplami sayinin kendisini veriyor ise bu sayilara armstrong sayilar denir.

    153 = (1*1*1) + (5*5*5) + (3*3*3)
    370 = (3*3*3) + (7*7*7) + (0*0*0)
    371 = (3*3*3) + (7*7*7) + (1*1*1)   
*/

let sayi = prompt("Lütfen bir sayi giriniz:"); // strign  methodlarini kullanmak ici Number'a donusturmuyorum

let toplam = 0;
for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}
if (sayi == toplam) {
  alert(sayi + " -- Armstrong sayidir");
} else {
  alert(sayi + " -- Armstrong sayi degildir!");
}
