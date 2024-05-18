// Template Literals

const write = (firstName, lastName) => {
//  console.log("İsim: " + firstName + " " + "Soyisim: " + lastName);

// template literals ile 
    console.log(`
        İsim: ${firstName} 
        Soyisim: ${lastName}
        `);

    //not: ALTGR + iki kez noktali virgul tusu --> ``
    // enter char. kabul eder
};


write("Yusuf", "Arslan");


const getUserById = (userId) => {
  console.log(`http://localhost:3000/users/${userId}`);
}

getUserById(7);