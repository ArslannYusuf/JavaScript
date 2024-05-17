// For in - For of Donguleri

let names = ["Yusuf", "Zeki", "Safa", "Ahmet"];

// * normal foreach dongusu
// names.forEach(function (name) {
//     console.log(name);
// })

// * arrow foreach dongusu
// names.forEach((name) => console.log(name))
 

// * for in dongusu
// degisken tanimlama, in, diziIsmi
for (let name in names) {
    console.log(name) // indeks numaralarini verir
    console.log(names[name]) // indekslerin degerlerini verir (for of dongusu gibi)
}


// * for of dongusu
// degisken tanimlama, of, diziIsmi
for (let name of names) {
    console.log(name) // direkt degerlerini verir
    console.log(names.indexOf(name)) // degerlerin indekslerini verir
}