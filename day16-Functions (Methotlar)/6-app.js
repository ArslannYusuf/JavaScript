/* 
    --- Decimal to Binary Conversion ---

    Decimal: Ondalikli sayilar --> 1,2,3,...,1000, 10000, 100000, ...
    Binary: Iki tabanli sayilar --> 0 ve 1'den olusur, Or:00001101, 01010101

    Bir sayinin binary karsiligi nasil bulunur?
    Sayinin 2 ile bolunmesi ile en son kalanları saat yonunda ardisik olarak yazdigimizda binary karsiligi olacaktir. Or: 10(decimal) ==> 1010(binary)
*/

let number = Number(
  prompt("Binary karşılığını görmek istediğiniz sayıyı giriniz:")
);

convertDecimalToBinary(number);

function convertDecimalToBinary(number) {
  let binary = "";
  while (true) {
    binary += (number % 2).toString(); //  veya (number % 2 + "") yapabiliriz
    number = Math.floor(number / 2);
    if (number == 1) {
      //artik bolme islemi tamamlansin ve donguden cik
      binary += 1;
      break;
    }
  }

  let result = reverse(binary);
  alert("Sonuç: " + result);
}

function reverse(binary) {
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }
  return reverseBinary;
}
