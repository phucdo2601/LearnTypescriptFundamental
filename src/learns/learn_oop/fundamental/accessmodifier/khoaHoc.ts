class khoaHoc {

    public id: number;
    protected nameSubject: string;
    public lengthSubject: number;

    constructor(id: number, nameSubject: string, lengthSubject: number) {
        this.id = id;
        this.nameSubject = nameSubject;
        this.lengthSubject = lengthSubject;
    }

    xemKhoaHoc() {
        var thongTin = `
            Id khoa hoc: ${this.id}, Ten Khoa hoc: ${this.nameSubject}, Do dai: ${this.lengthSubject} tieng
        `;
        console.log(this.nameSubject);
        
        console.log(thongTin);
        
    }
}

class khoaLapTrinh extends khoaHoc {
    public fileDinhKem: string;

    constructor(id: number, nameSubject: string, lengthSubject: number, fileDinhKem: string) {
        super(id, nameSubject, lengthSubject);
        this.fileDinhKem = fileDinhKem;
    }
    xemKhoaHoc() {

        super.xemKhoaHoc();
        console.log("File dinh kem: "+this.fileDinhKem);
        
    }

    test01(){
        console.log(this.nameSubject);
        
    }
}

/**
 * Test public
 */
var khoa08 = new khoaHoc(8, "hoc lam bnner voi bo cong cu cu adobe", 6);
// console.log(khoa08.nameSubject);// private khong truy cap ben ngoai class
console.log(khoa08.xemKhoaHoc());
// console.log(khoa08.nameSubject);// protected khong truy cap dc ben ngoai class




