/* // Local Storage -> degerler sessionStorage gibi depolamak icin kullanilir. window objesi kapatildiginda silinmez

// deger ekleme -> localStorage.setItem("key", "value");
localStorage.setItem("1", "JavaScript");
localStorage.setItem("2", "HTML");
localStorage.setItem("3", "CSS");
localStorage.setItem("4", "Bootstrap");
localStorage.setItem("5", "React");
localStorage.setItem("6", "Next.js");
localStorage.setItem(7, 777);


//deger alma
let value = localStorage.getItem("2");
console.log(value);

// deger silme
localStorage.removeItem("5");

// tum degerleri silme
localStorage.clear();


// array ekleme
let motions = ["Push up", "Pull up", "Squat", "Jogging"];
localStorage.setItem("motions", JSON.stringify(motions));

//NOT: storage lari arraya atarken JSON.stringify(), alirken JSON.parse() kullanilmalidir.

let value2 = JSON.parse(localStorage.getItem("motions"));
console.log(value2);

value2.forEach(function(motion) {
    console.log(motion);
});

 */