//kieu du lieu void
/**
 * Kieu void thi khong dc return,
 * thuc hien cau lenh nham in ra hoac ko can thiet tra ve gia tri
 * @param params 
 */
function demoFunction(): void {
    console.log("Hello World!!!");
    // return 100;
}

demoFunction();

//ep kieu trong ts

let kieu1 : any;
kieu1 = "Day la  vi du ve ep kieu trong ts";
// console.log((<string> kieu1).length);
console.log((kieu1 as string).length);

let xxx : string;
xxx = "140";

/**
 * Ep Kieu chi tuong thich voi kieu any, khong tuong thich voi cac kieu du lieu cu the
 */
// console.log((xxx as number) + 60);



