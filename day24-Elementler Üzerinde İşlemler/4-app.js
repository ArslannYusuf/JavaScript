// Element Değişimi

const cardBody = document.querySelectorAll(".card-body")[1];

// <h5 class="card-title">Todo Listesi</h5>

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Todo Listesi - Yeni";

console.log(newTitle,typeof newTitle);

// replaceChild( newNode , childNode ) -> 2. parametre Node tipinde!!!
// childNode[] ile node tipinde child'lardan indeks ile erisilebilir
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);