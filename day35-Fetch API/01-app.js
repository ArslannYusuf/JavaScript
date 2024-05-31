// FETCH API

/* 

callback yerine --> promise
ajax (xmlhttprequest) yerine --> fetch api



fetch api kullanımı;

fetch(url)
.then(response => {return response.json()})
.then((data) => myDisplay(data))
.catch(error => console.log(error));


* fatch api, promise<response> return eder

* donen promise yani response, .then ile calisir ve promise'nin prototype'inde yer alan json() methoduyla json objesini ilk then ile yakalayip ikinci then ile de ilgili islemimi yapabilirim, hata yine catch ve finally de mevcut ;)


! NOT: fetch api'ler async yapida oldugu icin donen promise'lerle sync yapiya cevirip kullaniyoruz 

*/

// console.log(this); // Window objesi




/* fetch ile veri cekme */

// function getStudents(url) {
//     fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// }

// getStudents("students.json");





/* fetch ile veri cekme */

function getData(url){
    fetch(url)
    /* .then ile response'u tek satirda json formatina cevirirken "return" yazmama gerek yok */
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getData("https://jsonplaceholder.typicode.com/users")




/* alternatif */

// function getData(url){
//     return fetch(url);
//     /* return ile methodun cagrildigi yere dondurup fetch ile donen response'u .then ile json formatina cevirip isleyebilirim */
// }

// getData("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));







/* POST methodu ile veri gonderme (rest api olmadigi icin bu methodu kullanamayiz, sadece ornekten ibaret)*/

// function saveUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify({
//       id: 11,
//       name: "Jhon Doe",
//       username: "johndoe",
//     }),
//   });
// }
