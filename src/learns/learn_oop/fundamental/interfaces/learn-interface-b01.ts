/**
 * interface co ban trong ts
 * Dinh nghia kieu du lieu hoac gom nhom cac kieu du lieu
 * De them dau cham hoi xau ten du lieu, chi ra rang bien do co the co hoac khong
 */
// interface nguoi {
//     tuoi: number;
//     ten?: string;
// }

// function watchInfo(motNguoi : nguoi) : void {
//     console.log(`Xin chao, ${motNguoi.ten}, nam nay ban ${motNguoi.tuoi} phai khong?`);
    
// }

// watchInfo({tuoi: 22, ten: "PhucDn"});

/**
 * Interface class
 * Quy dinh khi co mot class tao tu interface nay, 
 * thi class do phai co toi thieu cac thuoc tinh va cac ham cua interface impl
 */
interface tuongInterface {
    ten: string;
    mau: number;
    satThuong: number;
    mota: string;

    xemTuong() : void;

    donKyNang(x: number): any;

    bienVe() : void;
}

class tuong implements tuongInterface {
    ten: string;
    mau: number;
    satThuong: number;
    mota: string;
    mana : number;

	constructor(ten: string, mau: number, satThuong: number, mota: string, mana: number) {
        this.ten = ten;
        this.mau = mau;
        this.satThuong = satThuong;
        this.mota = mota;
        this.mana = mana;
    }

    xemTuong(): void {
        console.log("xem");
        
    }
    donKyNang(x: number) {
        return "don ky nang";
    }
    bienVe(): void {
        console.log("Bien ve");
        
    }

}

//namespace va export

module TestAndroid{
    export class String {

    }

    export class Number {

    }
}

var coca = new TestAndroid.String();