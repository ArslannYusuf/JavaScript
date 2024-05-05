// --- Keyboard Events ---


function run(e) {
  console.log(e.key); // tuş adı
  console.log(e.keyCode); // ASCII
    console.log(e.which); // ASCII
    
    if (e.keyCode == 116) {
        alert("Sayfa yenileme engellendi!!!");
    }
    e.preventDefault(); // fonksiyon tuşlarının işlevlerini engeller
}


// keypress - harf ve rakam tuşlarına basıldıgında tetiklenir, özel karakterler ve fonksiyon tuşa bastıgında tetiklenmez
// document.addEventListener("keypress", run);


// keydown - tüm tuşlarda tetiklenir
document.addEventListener("keydown", run);


// keyup - herhangi bir tusa basıldıktan sonra tuştan parmagımızı kaldırınca tetiklenir
document.addEventListener("keyup", run);


// preventDefault() - klavyedeki fonksiyon tuşlarının işlevlerini engeller, ör:F5 sayfa yeniletmez
document.addEventListener("keydown", run);



const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");
input.addEventListener("keyup", run2);

function run2(e) {
    cardTitle.textContent = e.target.value;
}