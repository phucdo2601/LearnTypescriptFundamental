/**
 * Vi du cac ham truyen thong binh thuong => dat truoc kieu du lieu truyen vo va tra ve
 */
// function watch(x: number) : number {
//     return x;
// }

// function watch2(x: string) : string{
//     return x;
// }

// function watch3(x: boolean) : boolean {
//     return x;
// }

/**
 * Minh hoa ve ham generic function thong thuong
 */
function watchGeneric<T>(x: T) : T {
    return x;
}

/**
 * Generic trong class
 */
class mayTinh {
    public static xemThongTin<T>(x:T[]) :void {
        console.log(x);
        
    }
}

// console.log(watchGeneric<string>("Day la ham generic!!!!"));  
mayTinh.xemThongTin<string>(["DELL", "HP", "ASUS"]);
mayTinh.xemThongTin<any>(["apple", 431, true]);

