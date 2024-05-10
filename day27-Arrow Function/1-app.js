// --- Arrow Function ---
// Not: ES6 ile gelmistir, tanimlanmis olan arrow function'lar bir degiskene atama yapilir ve method degisken ismi ile cagrilir

const yazdir = () => {
  console.log("Arrow Function");
};

yazdir();

const yazdir2 = (isim, soyisim) => {
  console.log(isim + " " + soyisim);
};

yazdir2("Yusuf", "Arslan");

console.log("---------")

// not : function'a ait suslu parantezleri silerek de birden fazla syntax'a sahip function yazilabilir,ancak kod okumada siralama karisir, bu yuzden suslu parantez kullanilmaz ise sadece bir satirda yazilmalidir...
const yazdir3 = (isim, soyisim) => console.log(isim + " " + soyisim)
let lang = "JS"
let title = "Frontend Developer"
console.log(`I am ${lang} developer. I love ${title}.`)

yazdir3("Yusuf", "Arslan");

console.log("---------")
const yazdir4 = (isim, soyisim) => { console.log(isim + " " + soyisim) }

yazdir4("Yusuf", "Arslan");

console.log("---------")

// not: eger arrow function tek bir parametreden olusuyorsa parantezleri kullanmayabiliriz
// tek satirda yazilirsa suslu parantezleri de kullanmayabiliriz 

const yazdir5 = isim => console.log(isim);
yazdir5("Yusuf");


const kupAl = sayi => sayi * sayi * sayi;
console.log(kupAl(3));

// callback function seklinde kullanimi
document.addEventListener("click", () => alert("Arrow Function"));

