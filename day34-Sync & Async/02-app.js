// Asenkron Problemi

// http istekleri

const users = [
    {
        userId : 7,
        post : "user7 Post 1 "
    },
    {
        userId : 7,
        post : "user7 Post 2 "
    },
    {
        userId : 7,
        post : "user7 Post 3 "
    },
    {
        userId : 8,
        post : "user8 Post 1 "
    },
    {
        userId : 9,
        post : " user9 Post 1 "
    }
];


// once user id bulmam gerek
// sonra user id uzerinden postlari bulmam gerek

function getUserId(){
    setTimeout(() => {
        // servise gittik ve cevabi aldik
    return 7;  
    }, 1000);
}



function getPostByUserId(userId){
    // serviste gercek bir rest apiye istek atacagiz
    console.log(userId)
    setTimeout(() => {
    users.forEach((user) => {
        if(user.userId===userId){
           console.log(user.post); 
        }
    })
    return 7;  
    }, 500);
}

let userId = getPostByUserId();
getPostByUserId(userId);

