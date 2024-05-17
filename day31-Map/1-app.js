// Map --> key (anahtar) value (deger)
// Map'ler bir dizi turudur

const map1 = new Map();
let value;
// map1.set(key, value); key, value degerleri herhangi bir data tipinde olabilir
// map1.set(1, "Yusuf");
// map1.set(true, 5);
// map1.set([1, 2, 3], { firstName: "Yusuf", lastName: "Arslan" });
// map1.set(false, "3");

// SET METHODS (verilen key ve value bilgileri map'e ekler)
map1.set(16, "Bursa");
map1.set(34, "Istanbul");
map1.set(35, "Izmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");

// GET METHODS (key bilgisine gore value bilgisini return eder)
console.log(map1.get(16)); // Bursa

const donenDeger = map1.get(34);
console.log(donenDeger); // Istanbul

//SIZE Property (map'in eleman sayisini return eder)
value = map1.size;
console.log(value); // 5

// DElETE METHODS (key bilgisine gore value bilgisini siler, silinen deger icin 'true' return eder)
value = map1.delete(1);
console.log(value); // true
console.log(map1.size); // 4 -- 1. key silindi

// HAS METHOD (key bilgisine gore value bilgisini kontrol eder, varsa 'true', yoksa 'false' return eder)
value = map1.has(16);
console.log(value); // true
console.log(map1.has(58)); // false

// For Of Loop ile Map Dizisi Dolasimi
for (let [key, value] of map1) {
  // Destructuring
  console.log(key, value);
}

// Array From ile Map Dizisi Dolasimi
const keys = Array.from(map1.keys());
console.log(keys); // [ 16, 34, 35, 6 ] seklinde return eder

keys.forEach((key) => {
  console.log(key, map1.get(key));
});

// keys()--> sadece keyler -  for of methodu ile
for (let key of map1.keys()) {
  console.log(key);
}

// values() --> sadece valueler -  for of methodu ile
for (let value of map1.values()) {
  console.log(value);
}

//
let array = [1, 2, 3, 4, 5, 6];

// Map'ten Array'e donusturme
const array2 = Array.from(map1);

// [ [34, "Istanbul"],  [16, "Bursa"],  [35, "Izmir"],  [6, "Ankara"],]; bu sekilde return eder ve foreach ile dolasabiliriz

array2.forEach((value) => {
  console.log(value[1]);
});


// Array'den Map'e donusturme
const array3 = [
  [34, "Istanbul"],
  [16, "Bursa"],
  [35, "Izmir"],
  [6, "Ankara"],
];

const map2 = new Map(array3);
console.log(map2);


//NOT: maplerde key unique olmak zorunda
const map3 = new Map();
map3.set(1, "Yusuf");
map3.set(1, "Arslan");
console.log(map3);// {1 => 'Arslan'}



//NOT: Maplerde key referans tipi olamaz.
const map4 = new Map();
map4.set(16, "Bursa");
map4.set(34, "Istanbul");
map4.set(35, "Izmir");
map4.set(6, "Ankara");
map4.set(1, "Adana");
map4.set([1,2,3], "array");

console.log(map4.get([1,2,3])); // undefined

// ancak key'i array olarak tutabilmek icin primitive type bir degiskene atmam lazim

let dizi = [1,2,3];

const map5 = new Map();
map5.set(16, "Bursa");
map5.set(34, "Istanbul");
map5.set(35, "Izmir");
map5.set(6, "Ankara");
map5.set(1, "Adana");
map5.set(dizi, "array");

console.log(map5.get(dizi)); // array



