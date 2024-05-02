/* 
    --- Array Methodlari ---

    map()       : Dizinin her elemanı için belirli bir işlemi uygulayarak yeni bir dizi oluşturur.
    filter()    : Belirli bir koşulu sağlayan elemanları içeren yeni bir dizi oluşturur.

    reduce()    : Diziyi tek bir değere dönüştürmek için her eleman üzerinde belirli bir işlemi uygular.
    forEach()   : Dizinin her elemanı için belirli bir işlemi uygular.
    find()      : Belirli bir koşulu sağlayan ilk elemanı bulur.
    indexOf()   : Belirli bir öğenin dizideki indeksini bulur. Eğer öğe bulunamazsa -1 döner.
    includes()  : Belirli bir öğenin dizide olup olmadığını kontrol eder. Boolean değer döndürür.
    some()      : En az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol eder. Boolean değer döndürür.
    every()     : Tüm elemanların belirli bir koşulu sağlayıp sağlamadığını kontrol eder. Boolean değer döndürür.
    push()      : Diziye yeni bir eleman ekler.
    pop()       : Diziden son elemanı çıkarır, ve bu elemani return eder.
    shift()     : Diziden ilk elemanı çıkarır.
    unshift()   : Dizinin başına yeni bir eleman ekler.
    splice()    : Dizi üzerinde değişiklik yaparak eleman ekler, çıkarır veya değiştirir.
    slice()     : Belirli bir kısmı kesip yeni bir dizi oluşturur.
    sort()      : Diziyi sıralar.
    reverse()   : Dizinin elemanlarını tersine çevirir.
    join()      : Diziyi parametre olarak verdigimiz deger ile birleştirir.
*/

let cars = ["BMW", "Mercedes", "MiniCooper", "Volvo", "Audi"];
let motos = ["Yamaha", "Honda", "Suzuki", "Kawasaki"];

cars.push("Opel"); // Dizinin sonuna yeni bir eleman ekler
console.log(cars); // ['BMW', 'Mercedes', 'MiniCooper', 'Volvo', 'Audi', 'Opel']

cars.unshift("TOGG"); // Dizinin basina yeni bir eleman ekler
console.log(cars); // ['TOGG', 'BMW', 'Mercedes', 'MiniCooper', 'Volvo', 'Audi', 'Opel']

cars.pop(); // Diziden son elemanı çıkarır
console.log(cars); // ['TOGG', 'BMW', 'Mercedes', 'MiniCooper', 'Volvo', 'Audi']

cars.shift(); // Diziden ilk elemanı çıkarır
console.log(cars); // ['BMW', 'Mercedes', 'MiniCooper', 'Volvo', 'Audi']

cars.splice(3, 3, "Mercedes"); // ilk parametre index, ikinci parametre de kac eleman silinecek, ucuncu parametre de eklenecek eleman
console.log(cars);  // ['BMW', 'Mercedes', 'MiniCooper', 'Mercedes']

cars.splice(3, 1); // ilk parametre index, ikinci parametre de kac eleman silinecek
console.log(cars); // ['BMW', 'Mercedes', 'MiniCooper']

let str = cars.toString(); // Diziyi stringe çevirir
console.log(str, typeof str); // BMW,Mercedes,MiniCooper string

let str2 = cars.join("-"); // Diziyi parametre olarak verdigimiz deger ile birleştirir
console.log(str2); // BMW-Mercedes-MiniCooper

let concatArray = cars.concat(motos); // iki diziyi birlestirir
console.log(concatArray); // ['BMW', 'Mercedes', 'MiniCooper', 'Yamaha', 'Honda', 'Suzuki', 'Kawasaki']

let sliceArray1 = cars.slice(0, 2); // Belirli bir kısmı kesip yeni bir dizi oluşturur, ilk parametre index, ikinci parametre de kac eleman alacagiz
console.log(sliceArray1); // ['BMW', 'Mercedes']

let sliceArray2 = cars.slice(2); // verilen parametreden itibaren kesip yeni bir dizi oluşturur
console.log(sliceArray2); // ['MiniCooper']

console.log(cars.length); // 3

let reverseArray = cars.reverse(); // Dizinin elemanlarını tersine çevirir
console.log(reverseArray); // ['MiniCooper', 'Mercedes', 'BMW']


let prgLang = "Python, Java, C#, JavaScript";
let prgLngArray = prgLang.split(","); // Stringi diziye çevirir
console.log(prgLngArray); // ['Python', ' Java', ' C#', ' JavaScript']

let index = cars.indexOf("Mercedes"); // Dizideki elemanın indexini verir
console.log(index); // 1

cars.includes("Mercedes"); // Dizideki elemanın var olup olmadıgını kontrol eder, boolean dondurur
console.log(cars.includes("Mercedes")); // true


