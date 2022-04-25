//kieu du lieu Any

let varFree : any;
varFree = 20;
console.log(`Gia tri Bien varFree dc gan lan dau tien: ${varFree}`);
varFree = "Do Ngoc Phuc"
console.log(`Gia tri Bien varFree dc gan lan 2: ${varFree}`);
varFree = true;
console.log(`Gia tri Bien varFree dc gan lan 3: ${varFree}`);
varFree = [true], "Do Ngoc Phuc", 22;
console.log(`Gia tri Bien varFree dc gan lan 4: ${varFree}`);
varFree = {
    userId: "SE140354",
    userName: "phucdnse140354",
    fullname: "Do Ngoc Phuc", 
    age: 22,
    gender: true,
    mainProfess: {
        professId: "VD-0111",
        professName: "Software Engineer"
    }

};
console.log(`Gia tri Bien varFree dc gan lan 3: ${varFree}`);
