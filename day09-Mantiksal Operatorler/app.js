/* 
------ Mantiksal Operatorler ------
    && - ve - birden fazla kosulunun hepsnini saglanmasi
    || - veya - birden fazla kosulun herhangi birinin saglanmasi
    !  - degil - bir kosoulun veya degerin olumsuzu
*/

let yas = 20;
let para = 3500;
let saglik = false;

// &&
console.log(yas > 18 && para > 3000 && saglik == true); // false

// ||
console.log(yas > 18 || para > 3000 || saglik == false); // true

// !
console.log(!(3>5)); // true