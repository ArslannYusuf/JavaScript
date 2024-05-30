// PROMİSE


//? callbak'lerin yerine asenkron yapilari senkron yapiya cevirmek icin promiseler kullanilir...



/*
    Promiselerin 3 ozelligi vardir;

    1. Pending : bekleme durumu, isleniyor
    2. Fullfiiled / Resolved : islem basarili, veri alindi
    3. Rejected : islem basarisiz, reddedildi


    * resolved / fulfilled dondugunde .then() ile yakalanip ilgili islemleri yapariz
    ! rejected dondugunde .catch() ile yakalayip hata mesajini veririz

    -----------ornek-------------
    let myPromise = new Promise((myResolve, myReject) => {
        myResolve(); // islem tamamlandi
        myReject(); // islem hatali
    });

    myPromise.then((response) => {
        function(response) { code if successful }
    
    }.catch((error) => {
        function(error) { code if some error }
    }).finally(() => {
        function() { code if successful or some error }
    })




*/

let check = true;

const promise1 = new Promise((resolve, reject) => {
    if(check){
        resolve("islem tamamlandi");
    }else{
        reject("islem hatali");
    }

})
console.log(promise1);

//------------------

let check2 = true;
function createPromise(){
    return new Promise((resolve, reject) => {
    if(check2){
        resolve("islem tamamlandi");
    }else{
        reject("islem hatali");
    }
    })
}

// donen promise'yi islemem gerekli
createPromise().then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{console.log("her zaman calisir")})




//PROMİSE + XMLHTTPREQUEST

// Promise.all 



function readStudents(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if(xhr.readyState === 4 && xhr.status === 200){
                    // json formatına cevirirken de hata alabiliriz, bu sebeple try-catch
                    try {
                        const student = JSON.parse(xhr.responseText);
                        resolve(student);
                    } catch (error) {
                        reject("JSON'da problem var");
                    }
                   
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}

// methodu cagirip parametreyi gonderdim
readStudents("students.json").then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


