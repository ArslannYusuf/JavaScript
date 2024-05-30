// PROMİSE + XMLHTTPREQUEST


// user' lari getir
function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", () => {
           try {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
           } catch (error) {
            reject(error);
           }
        })

        // XMLHttpRequest istegimi open() ile ilgili url'e GET methodunu kullanarak actim ve ardindan send() ile de gonderdim
        xhr.open("GET", url);
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users").then((res)=>{
    //console.log(res)
    res.forEach((user) => {
        //user'larin isimlerini yazdir
        console.log(user.name)
    });

    console.log("daha sonra farkli asenkron kodlarimi burada calistirabilirim")
}).catch((err)=>console.log(err)).finally(()=>{
    // her durumda calisir olacagi icin, ornegin mail atma kodlarini buraya yazabilirim
})


// ---------------



// id'si 3 olan user'in postlarindaki yorumlari getir

function getCommentsByUserId(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", () => {
           try {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
           } catch (error) {
            reject(error);
           }
        })

        
        xhr.open("GET", url);
        xhr.send();
    })
}


getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((res)=>{
    console.log(res)
   return getCommentsByUserId(`https://jsonplaceholder.typicode.com/users/${res.id}`)
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>console.log(err)).finally(()=>{
    // her durumda calisir olacagi icin, ornegin mail atma kodlarini buraya yazabilirim
})

