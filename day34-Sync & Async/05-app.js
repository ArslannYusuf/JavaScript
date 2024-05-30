// PROMİSE ALL

//! Promise.all() ile tum promisler resolve ise then calisir, en az biri hatali olursa catch calisir

//* p1, p2, p3 bu promise'ler Promise.all ile bir array formatinda doner




const p1 = Promise.resolve("birinci proimse basarili");

const p2 = Promise.resolve("ikinci proimse basarili");

const p3 = new Promise((resolve, reject) => {
    resolve("ucuncu proimse basarili");
})

const p4 = Promise.reject("promise 'de hata var");


Promise.all([p1, p2, p3, p4])
.then((response) => {
    console.log(response);

    // for of ile value'leri yazdirdim
    for(let value of response){
        console.log(value);
    }
})
.catch((error) => {
    console.log(error);
})