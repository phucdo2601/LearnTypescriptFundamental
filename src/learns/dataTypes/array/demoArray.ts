//kieu du lieu mang
/**
 * Mang chu, mang so
 */

//Mang chu
var listStudent : string[] = [];
listStudent = ["Do Ngoc Phuc", "Nguyen Pham Hoang Thai", "Khanh Tram", "Le Vinh"];
// console.log(`Student at index 0 : ${listStudent[1]}`);

for (let i = 0; i < listStudent.length; i++) {
    console.log(`Hoc Vien Thu ${i}: ${listStudent[i]}`);
}

//Mang so
var listNumber : number[] = [2, 4, 6,8];
for (let i = 0; i < listNumber.length; i++) {
    var a : number = i+1;
    console.log(`So nguyen tai vi tri ${a}: ${listNumber[i]}`);
    
    
}