/**
 * Anonymous function -- la mot function khong co ten
 */

let x_demo_anony_func = function(x: number, y: string) : string {
    return `Chao ${y}, nam nay ban ${x} tuoi co phai khong ?`;       
}

/**
 * Mot cach khai bao khac cua Anonymous function
 * tach khai bao tham so va kieu gia tri tra ve sang mot ben 
 * Con lai ben trong xu ly nhu cu, moi thao tac nhu cu
 * Khai bao interface (khai bao kieu so do) -- khai bao cac kieu gia tri ben trai truoc; sau do moi khai bao ham
 */
let g_demo_anony_func: (x: number, y: string) => string = function(x,y) {

    return `Chao ${y}, nam nay ban ${x} tuoi co phai khong ?`;       
}

/**
 * Goi ham Anonymous
 */
// console.log(x_demo_anony_func(22, "Phucdn"));
console.log(g_demo_anony_func(22, "Phucdn"));


