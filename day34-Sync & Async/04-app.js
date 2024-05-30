// PROMİSE + XMLHTTPREQUEST

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
    res.array.forEach((user) => {
        console.log(user.name)
    });
    console.log("daha sonra asenkron kodlarimi burada calistirabilirim")
}).catch((err)=>console.log(err)).finally(()=>{
    // her durumda calisir olacagi icin, ornegin mail atma kodlarini buraya yazabilirim
})