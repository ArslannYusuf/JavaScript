// Binary to decimal converter ( ikilik sayidan onluk sayiya cevirme )

// Math.pow(2, i) --> 2^i


let binary = "1101011"; // decimal : 107
convertBinaryToDecimal(binary);


function convertBinaryToDecimal(binary) { 

    let toplam = 0;
    let ust = 0;
    for (let i = binary.length - 1; i >= 0; i--) { 
        toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
        ust++;
    }
    console.log("Sonuç: " + toplam);
}

