/*
    * JavaScript senkron calisan bir programlama dilidir.

    JS'nin async calistigi kisimlar; 
    1-Timing
    2-Event(Olay)
    3-HTTP istekleri
    
    ! Web API tarafindan yonetlen hersey async calisir,

    * Callback - Promise - Async & Await yapilarini kullanarak async yapilari sync yapilara cevirebiliriz

*/

selamlama();

console.log("1");
console.log("2");
console.log("3");

function selamlama() {
  console.log("Selam");
}

//1-Timing

console.log("yusuf");

setTimeout(() => {
  console.log("1000 ms doldu ve calisti");
}, 1000);

setTimeout(() => {
  console.log("500 ms doldu ve calisti");
}, 500);

setTimeout(() => {
  console.log("750 ms doldu ve calisti");
}, 750);

console.log("arslan");
