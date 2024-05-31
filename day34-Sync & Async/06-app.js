// Asnyc - Await

/* 

* Async-Await yapisi, promise'lerdeki .then zincirinden kurataran bir yapidir 


! bir function icinde donen Promise'leri "await" ile bekletmeliyiz ki async problemi yasamayalim...


* bir function'un basina "async" keyword'unu koydugumuzda geriye "promise" dondurur.


* function'un icerisinde "await" keyword'unu koydugumuzda o function'un basina MUTLAKA "async" keyword'unu koymaniz gerekir 


* bir function'u "async" ile isaretledikten sonra duruma gore donen Promisle'rde birden falza "await" keyword'unu koyabilim


*/

/* aysnc ile kulllanilginda function bize promise dondurur */
async function hello(){
    return "Hello World"
}

console.log(hello()) // geriye promise dondurur   --> Promise {<fulfilled>: 'Hello World'}

hello().then((res) => console.log(res)) // Hello World





/*  PROMİSE ile id'si 1 olan user'in yorumlarini getir */

// document.getElementById("button").addEventListener("click", () => {

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((post) => {

//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((res) => res.json())
//         .then((comments) => {

//             comments.forEach((comment) => {
//                 console.log(comment);
//             })
//         })

//     })

// } )



/*  ASYNC-AWAIT ile id'si 1 olan user'in yorumlarini getir */


// document.getElementById("button").addEventListener("click", async () =>{

//     /* fetch ile id'si 1 olan postu getirirken bekle */
//    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")

//    const post = await responsePost.json();

//    /* fetch ile id'si 1 olan post'un yorumlarini getirirken bekle */
//     const responseComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)


//     /* yorumlari dolasirken bekle */
//     const comments = await responseComment.json();

//     /* postu ve yorumlari yazdir */
//     console.log(post, comments)

// })




/*  kisa yol */

document.getElementById("button").addEventListener("click", async () =>{

    /* fetch ile id'si 1 olan postu getirirken bekle */
   const post = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();


   /* fetch ile id'si 1 olan post'un yorumlarini getirirken bekle */
    const comments = await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
 

    /* postu ve yorumlari yazdir */
    console.log(post, comments)

})
