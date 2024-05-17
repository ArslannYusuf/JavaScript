/*  
let sayi = prompt("Lütfen 1 ile 5 arasında bir sayi giriniz:");

switch (sayi) { // "1", "2", "3", "4", "5"
    case "1": alert("Girilen sayı :" + sayi + "'dir.")
        break;
    
    case "2": alert("Girilen sayı :" + sayi + "'dir.")
        break;
    
    case "3": alert("Girilen sayı :" + sayi + "'dir.")
        break;
    
    case "4": alert("Girilen sayı :" + sayi + "'dir.")
        break;
    
    case "5": alert("Girilen sayı :" + sayi + "'dir.")
        break;
        
    default: alert("Girilen sayı 1 ile 5 arasında olmalıdır")
        break;
}

*/

let yeniSatir = "\n";

let gunSecimi = prompt(
  "Lütfen bir gün seçimi yapınız: " +
    yeniSatir +
    "1-Pazartesi" +
    yeniSatir +
    "2-Salı" +
    yeniSatir +
    "3-Çarşamba" +
    yeniSatir +
    "4-Perşembe" +
    yeniSatir +
    "5-Cuma" +
    yeniSatir +
    "6-Cumartesi" +
    yeniSatir +
    "7-Pazar"
);

switch (gunSecimi) {
    case "1": alert("Seçiminiz: Pazartesi");
        break;
    
    case "2": alert("Seçiminiz: Salı");
        break;
    
    case "3": alert("Seçiminiz: Çarşamba");
        break;
    
    case "4": alert("Seçiminiz: Perşembe");
        break;
    
    case "5": alert("Seçiminiz: Cuma");
        break;
    
    case "6": alert("Seçiminiz: Cumartesi");
        break;
    
    case "7": alert("Seçiminiz: Pazar");
        break;
    
    default: alert("Girilen sayı 1 ile 7 arasında olmalıdır")
}
