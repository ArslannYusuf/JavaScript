/* 
    ------------SCOPE (KAPSAM)----------------
    -> Global Scope - siniri olmayan, heryerden erisilebilen scope
    -> Function Scope - fonksiyon parantezleri arasindaki {} scope
    -> Block Scope - if, for, while gibi bloklarin scope'lari

*/

var desgiskenİsmi = 10;   // Global scope

function fonksiyon() {
    var desgiskenİsmi = 20;   // Function scope
}

if (true) {
    var desgiskenİsmi = 30;   // Block scope
}

while (true) {
    var desgiskenİsmi = 40;   // Block scope
}

do {
    var desgiskenİsmi = 50;   // Block scope
} while (true);

for (var i = 0; i < 10; i++) {
    var desgiskenİsmi = 60;   // Block scope
}