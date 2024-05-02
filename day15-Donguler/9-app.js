//
/* 
    --- Foreach Dongusu ---

    let array = [1, 2, 3, 4, 5];
    array.forEach(function(num) { 
        clg(num);
    });

    Not: dizilerde genel olarak forEach kullanilir.
*/
// forEach dongusu ile;
let num = [1, 2, 3, 4, 5];

num.forEach(function (num) {
    console.log(num);
})

// for dongusu ile;

let num2 = [1, 2, 3, 4, 5];

for (let i = 0; i < num2.length; i++) {
    console.log(num2[i]);
}

// while dongusu ile;

let num3 = [1, 2, 3, 4, 5];

let sayac = 0;
while (sayac < num3.length) {
    console.log(num3[sayac]);
    sayac++;
}