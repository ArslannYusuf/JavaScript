// set --> map'lerin methodlari ile ayni methodlari kullanir, unique degerleri tutan bir dizi cesididir, key-value mantigi yok
const set = new Set();

// add methodu
set.add(true);
set.add(3.14);
set.add("yusuf");
set.add("yusuf");
set.add("yusuf");
set.add("yusuf");
set.add(8);
set.add({ username: "yusuf", password: "12345"});
set.add([1, 2, 3]);

console.log(set.size); // 6

// delete methodu
set.delete("yusuf");
console.log(set.size); // 5
set.delete([1, 2, 3]); // bu halde silmez
// referance type degerleri bir degiskene atayip o halde silebilirim


// has methodu
console.log(set.has("yusuf")); // false
console.log(set.has(3.14)); // true


// clear methodu
// set.clear();
// console.log(set.size); // 0

// For of dongusu
for (const item of set) {
    console.log(item);
}


// Set'den Array'a donusturme
const values = Array.from(set);
values.forEach((value) => console.log(value));


// Array'den Set'e donusturme
let array = [1,"hello", false, 34, [1, 2, 3]];
const newSet = new Set(array);
console.log(newSet);