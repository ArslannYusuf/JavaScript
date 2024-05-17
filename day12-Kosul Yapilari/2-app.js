// -----Ders Ortalamasi Bulma

// alinan notlarda vize1 %30, vize2 %30, final %40 etkileyecek, ortalama 60 dan buyukse "Gectiniz", ortalama 60 dan kucukse "Kaldiniz" yazdiran kodu yaziniz.


let vize1 = Number(prompt("Vize1 notunu giriniz:"));

let vize2 = Number(prompt("Vize2 notunu giriniz:"));

let final = Number(prompt("Final notunu giriniz:"));

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

if (ortalama >= 60) {
    alert("Gectiniz, notunuz:" + ortalama);
}else {
    alert("Kaldiniz, notunuz:" + ortalama);
}