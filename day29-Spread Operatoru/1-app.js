// --- Spread Operator ---

// Not: kullanimi "..." ile yapilir.


let numbers =[10, 20, 30, 40];
function add(a, b, c, d) {
    console.log(a + b + c + d);
}

// eski yontem
// add(numbers[0], numbers[1], numbers[2], numbers[3]); //100

// yeni yontem -> Spread Operator
add(...numbers); // 100

// ...numbers --> numbers[0], numbers[1], numbers[2], numbers[3]


// array kullanimi
const diller1 = ["Python", "Java", "JavaScript"];
// const diller2 = ["Swift", "Kotlin", "Dart", diller1[0], diller1[1], diller1[2]];
const diller2 = ["Swift", "Kotlin", "Dart", ... diller1];

console.log(diller2)

// example
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...kalanSayilar] = numbers2;

console.log(a, b, kalanSayilar); // 1 2 [3, 4, 5, 6, 7, 8, 9]


///////////////
const array1 = [1, 2, 3, 4, 5];
// let array2 = [];

// array2[0] = array1[0];
// array2[1] = array1[1];
// array2[2] = array1[2];
// array2[3] = array1[3];
// array2[4] = array1[4];

array2= [...array1];

console.log(array2);


